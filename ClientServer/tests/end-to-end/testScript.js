const { readFile } = require('fs/promises');
const path = require('path');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const URL = process.argv[2];


async function content(path) {  
    return await readFile(path, 'utf8');
}
  
async function runTests() {
    const html = await content(path.resolve(__dirname, 'htmlOutput.txt'));
    const window = createDom(html);
    verifyHtml(window);
    checkForApp(window);

}

function createDom(html) {
    const resourceLoader = new jsdom.ResourceLoader({
        proxy: URL,
        strictSSL: false,
    });
    console.log(URL);
    const { window } = new JSDOM(html, { runScripts: "dangerously", resources: "usable", "url": URL });
    return window;
}

function verifyHtml(window) {
    const element = window.document.getElementById("root");
    if (element == null) {
        console.log("ERROR: Couldn't find root component");
    } else {
        console.log("Found Root Element");
    }

}

function checkForApp(window) {
    const element = window.document.getElementById("app");
    console.log(element);
}


runTests();