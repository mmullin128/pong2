import { useState } from 'react';
import MenuButton from './MenuButton.js';

export default function MainMenu({ renderPage }) {
    return (
        <div className='menu' id="main-menu">
            <h1 id='title'>PaddleBall</h1>
            <MenuButton id={"play-now-btn"} buttonText={"Play Now"} renderPage={renderPage} pageId={"username"}/>
            <MenuButton id={"private-game-btn"} buttonText={"Private Game"} renderPage={renderPage} pageId={"private-game"}/>
        </div>
    );
}