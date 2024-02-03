const { readFile } = require('fs/promises');
const path = require('path');

async function content(path) {  
    return await readFile(path, 'utf8');
}
  
async function runTests() {
    const text = await content(path.resolve(__dirname, 'htmlOutput.txt'));
    receivedHtml(text);
}


function receivedHtml(text) {
    console.log(text);
}
