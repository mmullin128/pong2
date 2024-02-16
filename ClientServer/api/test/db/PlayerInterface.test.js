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
    test("insert", async () => {
        const dbClient = mongoClient(process.env.DB_URI);
        await connect(dbClient);
        const playerInterface = new PlayerInterface(dbClient);
        const testPlayer = playerInterface.baseInstance;
        const insertStatus = await playerInterface.insert(testPlayer.collection,testPlayer.id,testPlayer);
        expect(insertStatus).toBe(true);
        await disconnect(dbClient);
    })
    test("get", async () => {
        const dbClient = mongoClient(process.env.DB_URI);
        await connect(dbClient);
        const playerInterface = new PlayerInterface(dbClient);
        const testPlayer = playerInterface.baseInstance;
        const doc = await playerInterface.getWait(testPlayer.collection, testPlayer.id);
        expect(doc).toEqual(testPlayer);
        await disconnect(dbClient);
    })
    test("delete", async () => {
        const dbClient = mongoClient(process.env.DB_URI);
        await connect(dbClient);
        const playerInterface = new PlayerInterface(dbClient);
        const testPlayer = playerInterface.baseInstance;
        //wait for test instance to populate then delete
        await playerInterface.getWait(testPlayer.collection, testPlayer.id);
        await playerInterface.delete(testPlayer.collection, testPlayer.id);
        const doc = await playerInterface.get(testPlayer.collection, testPlayer.id);
        expect(doc).toBeFalsy();
        await disconnect(dbClient);
    })
    test("update name", async () => {
        const dbClient = mongoClient(process.env.DB_URI);
        await connect(dbClient);
        const playerInterface = new PlayerInterface(dbClient);
        let testPlayer2 = playerInterface.baseInstance;
        testPlayer2["id"] = "test1";
        
        const insertStatus = await playerInterface.insert(testPlayer2.collection,testPlayer2.id,testPlayer2);
        testPlayer2["name"] = "new name"
        const updateStatus = await playerInterface.updateName(testPlayer2.collection, testPlayer2.id, testPlayer2.name);
        const doc = await playerInterface.get(testPlayer2.collection, testPlayer2.id);
        expect(doc).toEqual(testPlayer2);
        await playerInterface.delete(testPlayer2.collection,testPlayer2.id);
        await disconnect(dbClient);
    })
})