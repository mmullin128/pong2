const { readFile } = require('fs/promises');
const path = require('path');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;



async function content(path) {  
    return await readFile(path, 'utf8');
}
  
async function runTests() {
    const html = await content(path.resolve(__dirname, 'htmlOutput.txt'));
    const window = createDom(html);

}

function createDom(html) {
    const { window } = new JSDOM(html, { runScripts: "dangerously" });
    return window
}

function checkForApp(window) {
    const element = window.document.getElementById("app");
    console.log(element);
}


runTests();