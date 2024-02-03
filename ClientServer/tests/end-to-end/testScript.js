const { readFile } = require('fs/promises');
const path = require('path');

async function content(path) {  
    return await readFile(path, 'utf8');
}
  
async function runTests() {
    const html = await content(path.resolve(__dirname, 'htmlOutput.txt'));
    receivedHtml(html);
}


function receivedHtml(html) {
    console.log(html);
}


runTests();