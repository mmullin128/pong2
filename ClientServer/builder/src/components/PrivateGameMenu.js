import { useState } from 'react';
import MenuButton from './MenuButton.js';

export default function MainMenu({ renderPage }) {
    return (
        <div className="menu" id="private-game-menu">
            <h1 id='title'>Private Game</h1>
            <MenuButton id={"private-game-menu-back-btn"} buttonText={"back"} renderPage={renderPage} pageId={"back"}/>
        </div>
    );
}