const { mongoClient, connect, disconnect } = require("../../src/db/API/mongoClient.js");


test("mongo client connect, disconnect", async () => {
    const dbClient = mongoClient(process.env.DB_URI);
    const startStatus = await connect(dbClient);
    expect(startStatus).toBe("connected");
    const stopStatus = await disconnect(dbClient);
    expect(stopStatus).toBe("disconnected");
})