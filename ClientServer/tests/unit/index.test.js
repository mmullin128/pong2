const { init, close } = require('../../dist/server/Server.js');

test("server start and close", () => {
    const PORT = 3000;
    const server = init(PORT, { close: true });
});