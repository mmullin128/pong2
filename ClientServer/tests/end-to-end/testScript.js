const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const URL = process.argv[2];



async function runTests() {
    const window = await createDom();
    verifyHtml(window);
    const appNode = await checkForApp(window);
    console.log(appNode.id);
}

async function createDom() {
    console.log(URL);
    //const { window } = new JSDOM(html, { runScripts: "dangerously", resources: "usable", "url": "http://3.22.66.44/" });
    const dom = await JSDOM.fromURL("http://3.22.66.44/", { runScripts: "dangerously", resources: "usable" } );
    return dom.window;
}

function verifyHtml(window) {
    const element = window.document.getElementById("root");
    if (element == null) {
        throw new Error("Couldn't find root element");
    }
}

const checkForApp = (window) => {return new Promise((resolve,reject) => {
    const checkInterval = setInterval(() => {
        const element = window.document.getElementById("app");
        if (!(element == null)) {
            resolve(element);
        }
    }, 20);
    const timeOut = setTimeout(() => {
        clearInterval(checkInterval);
        reject("Couldn't find app element");
    },
    5000)
})}


runTests();