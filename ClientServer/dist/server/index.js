const { init, close } = require('./Server.js');
const PORT = process.env.PORT;

console.log('starting server');

const server = init(PORT);
