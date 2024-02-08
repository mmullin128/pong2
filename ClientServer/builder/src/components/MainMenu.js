import { useState } from 'react';
import MenuButton from './MenuButton.js';

export default function MainMenu({ renderPage }) {
    return (
        <div className='menu' id="main-menu">
            <h1 id='title'>PaddleBall</h1>
            <MenuButton buttonText={"Play Now"} renderPage={renderPage} pageId={"username"}/>
            <MenuButton buttonText={"Private Game"} renderPage={renderPage} pageId={"private-game"}/>
        </div>
    );
}