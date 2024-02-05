const { readFile } = require('fs/promises');
const path = require('path');
const jsdom = require("jsdom");
const { constrainedMemory } = require('process');
const { JSDOM } = jsdom;

const URL = process.argv[2];


async function content(path) {  
    return await readFile(path, 'utf8');
}
  
async function runTests() {
    const html = await content(path.resolve(__dirname, 'htmlOutput.txt'));
    console.log(html);
    const window = await createDom(html);
    verifyHtml(window);
    const message = await checkForApp(window);
    console.log(message);
}

async function createDom(html) {
    console.log(URL);
    //const { window } = new JSDOM(html, { runScripts: "dangerously", resources: "usable", "url": "http://3.22.66.44/" });
    const dom = await JSDOM.fromURL("http://3.22.66.44/", { runScripts: "dangerously", resources: "usable" } );
    return dom.window;
}

function verifyHtml(window) {
    const element = window.document.getElementById("root");
    if (element == null) {
        console.log("ERROR: Couldn't find root component");
    } else {
        console.log("Found Root Element");
    }

}
const checkForApp = (window) => {return new Promise((resolve,reject) => {
    const checkInterval = setInterval(() => {
        const element = window.document.getElementById("app");
        if (!(element == null)) {
            resolve("Found App");
        }
    }, 20);
    const timeOut = setTimeout(() => {
        clearInterval(checkInterval);
        resolve("TimedOut");
    },
    5000)
})}


runTests();