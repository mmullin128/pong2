const { mongoClient, connect, disconnect } = require("../../src/db/API/mongoClient.js");
const PlayerInterface = require("../../src/db/Interfaces/PlayerInterface.js");


describe("Database: Player Interface", () => {
    
    test("create Interface", async () => {
        const dbClient = mongoClient(process.env.DB_URI);
        await connect(dbClient);
        const playerInterface = new PlayerInterface(dbClient);
        const testPlayer = playerInterface.baseInstance;
        expect(testPlayer).toEqual(PlayerInterface.testPlayer);
        await disconnect(dbClient);
    })
    test("set and get", async () => {
        const dbClient = mongoClient(process.env.DB_URI);
        await connect(dbClient);
        const playerInterface = new PlayerInterface(dbClient);
        const testPlayer = playerInterface.baseInstance;
        await playerInterface.insert(testPlayer.collection,testPlayer.id,testPlayer);
        const doc = playerInterface.get(testPlayer.collection, testPlayer.id);
        expect(doc).toEqual(testPlayer);
        await disconnect(dbClient);
    })
    test("delete", async () => {
        const dbClient = mongoClient(process.env.DB_URI);
        await connect(dbClient);
        const playerInterface = new PlayerInterface(dbClient);
        const testPlayer = playerInterface.baseInstance;
        await playerInterface.delete(testPlayer.collection, testPlayer.id);
        const doc = await playerInterface.get(testPlayer.collection, testPlayer.id);
        expect(doc).toBeFalsy();
        await disconnect(dbClient);
    })
    
})