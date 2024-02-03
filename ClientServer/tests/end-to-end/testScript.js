const { readFile } = require('fs/promises');
const path = require('path');

async function content(path) {  
    return await readFile(path, 'utf8');
}
  
const text = await content(path.resolve(__dirname, 'htmlOutput.txt'));

console.log(text);