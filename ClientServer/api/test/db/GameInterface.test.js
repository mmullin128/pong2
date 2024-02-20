const { mongoClient, connect, disconnect } = require("../../src/db/API/mongoClient.js");
const GameInterface = require("../../src/db/Interfaces/GameInterface.js");
const PlayerInterface = require("../../src/db/Interfaces/PlayerInterface.js");


describe("Database: Game Interface", () => {
    
    test("game interface", async () => {
        const dbClient = mongoClient(process.env.DB_URI);
        await connect(dbClient);
        const gameInterface = new GameInterface(dbClient);
        let testGame = gameInterface.baseInstance;
        let testPlayer = PlayerInterface.testPlayer;
        testGame["id"] = "test3";
        testGame["players"] = [];
        try {
            await gameInterface.delete(testGame.collection, testGame.id);
            const insertStatus = await gameInterface.insert(testGame.collection,testGame.id,testGame);
            expect(insertStatus).toBe(true);
            const addPlayerStatus = await gameInterface.addPlayer(testGame.collection, testGame.id, testPlayer.collection, testPlayer.id, testGame["teams"][0])
            expect(addPlayerStatus).toBe(true);
            const doc = await gameInterface.get(testGame.collection, testGame.id);
            testGame["players"] = [
                {
                    "collection" : testPlayer.collection,
                    "id" : testPlayer.id,
                    "team" : testGame["teams"][0]
                }
            ];
            expect(doc).toEqual(testGame);
        } finally {
            await gameInterface.delete(testGame.collection,testGame.id);
            await disconnect(dbClient);
        }
        
    })
})