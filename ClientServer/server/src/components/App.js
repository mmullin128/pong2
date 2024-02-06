import { useState } from 'react';
import MainMenu from './MainMenu.js';
import UsernameMenu from './UsernameMenu.js';
import PrivateGameMenu from './PrivateGameMenu.js';
export default function App() {

    function renderPage(pageId) {
        if (pageId == "back") {
            //remove last item in page tree
            setCurrentPage(pageTree[pageTree.length-2]);
            setPageTree(pageTree.slice(0,pageTree.length-1));
            return;
        }
        if (pageId == pageTree[pageTree.length-1]) return; 
        setPageTree(newTree);
        setCurrentPage(pageTree[pageTree.length-1]);
    }

    const [pageTree, setPageTree] = useState(["main"]);
    const [currentPage, setCurrentPage] = useState("main");
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
            {pages[currentPage]}
        </div>
    );
}