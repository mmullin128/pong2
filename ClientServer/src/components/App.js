import { useState } from 'react';
import MainMenu from './MainMenu.js';
export default function App() {

    function renderPage(pageId) {
        setPageId(pageId);
    }

    const [pageId, setPageId] = useState("main");
    let content;
    if (pageId == "main") {
        content = <MainMenu renderPage={renderPage}/>
    } else {
        content = pageId;
    }
    return (
        <div id="app">
            {content}
        </div>
    );
}