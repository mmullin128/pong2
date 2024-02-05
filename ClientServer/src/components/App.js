import { useState } from 'react';
import MainMenu from './MainMenu.js';
import UsernameMenu from './UsernameMenu.js';
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

    let currentPage = pages[pageTree[-1]];
    return (
        <div id="app">
            {currentPage}
        </div>
    );
}