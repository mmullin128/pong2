const { init, close } = require('./Server.js');
const PORT = process.env.PORT;

const server = init(PORT);
