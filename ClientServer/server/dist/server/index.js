const { init, close } = require('./Server.js');
const PORT = process.env.PORT || 3000;

console.log('starting server');

const server = init(PORT);
