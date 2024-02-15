import { mongoClient, connect, disconnect } from "../../src/db/API/mongoClient.js"
import PlayerInterface from "../../src/db/Interfaces/PlayerInterface.js";

const dbClient = mongoClient(process.env.DB_URI);

describe("Database: Player Interface", () => {
    beforeAll( async () => {
        await connect(dbClient);
    });
    afterAll( async () => {
        await disconnect(dbClient);
    })
    
    test("create Interface", async () => {
        const playerInterface = new PlayerInterface(dbClient);
        const testPlayer = playerInterface.baseInstance;
        expect(testPlayer).toEqual(PlayerInterface.testPlayer);
    })
    test("set and get", async () => {
        const playerInterface = new PlayerInterface(dbClient);
        const testPlayer = playerInterface.baseInstance;
        await playerInterface.insert(testPlayer.collection,testPlayer.id,testPlayer);
        const doc = playerInterface.get(testPlayer.collection, testPlayer.id);
        expect(doc).toEqual(testPlayer);
    })
    test("delete", async () => {
        const playerInterface = new PlayerInterface(dbClient);
        const testPlayer = playerInterface.baseInstance;
        await playerInterface.delete(testPlayer.collection, testPlayer.id);
        const doc = await playerInterface.get(testPlayer.collection, testPlayer.id);
        expect(doc).toBeFalsy();
    })
    
})