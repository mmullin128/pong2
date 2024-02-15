import { mongoClient, connect, disconnect } from "../../src/db/API/mongoClient.js"
test("mongo client connect, disconnect", async () => {
    const dbClient = mongoClient(process.env.DB_URI);
    const startStatus = await connect(mongoClient);
    expect(startStatus).toBe("connected");
    const stopStatus = await disconnect(mongoClient);
    expect(stopStatus).toBe("disconnected");
})