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
        if (pageId == pageTree[pageTree.length-1]) return; 
        let newTree = pageTree;
        newTree.push(pageId);
        setPageTree(newTree);
        console.log(newTree);
        console.log(pageTree);
    }

    const [pageTree, setPageTree] = useState(["main"]);
    const pages = {
        "main": <MainMenu renderPage={renderPage}/>,
        "username": <UsernameMenu renderPage={renderPage}/>,
        "private-game": <PrivateGameMenu renderPage={renderPage}/>
    };

    return (
        <div id="app">
            {pageTree}
            {pageTree.length}
            {pageTree[pageTree.length-1]}
            {pages[pageTree[pageTree.length-1]]}
        </div>
    );
}