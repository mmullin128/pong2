import { useState } from 'react';
import MainMenu from './MainMenu.js';
import UsernameMenu from './UsernameMenu.js';
import PrivateGameMenu from './PrivateGameMenu.js';
export default function App() {

    function renderPage(pageId) {
        if (pageId == "back") {
            //remove last item in page tree
            setPageTree(pageTree.slice(0,pageTree.length));
            return;
        }
        const newTree = pageTree;
        newTree.push(pageId);
        setPageTree(newTree);
    }

    const [pageTree, setPageTree] = useState(["main"]);
    let pages = {
        "main": <MainMenu renderPage={renderPage}/>,
        "username": <UsernameMenu renderPage={renderPage}/>,
        "private-game": <PrivateGameMenu renderPage={renderPage}/>
    };

    let currentPage = pageTree[pageTree.length-1];
    console.log(pageTree);
    console.log(currentPage);
    return (
        <div id="app">
            {currentPage}
        </div>
    );
}