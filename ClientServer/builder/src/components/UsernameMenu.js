import { useState } from 'react';
import MenuButton from './MenuButton.js';

export default function UsernameMenu({ renderPage }) {
    return (
        <div className="menu" id="username-menu">
            <h1 id='title'>Username</h1>
            <MenuButton id={"username-menu-back-btn"} buttonText={"back"} renderPage={renderPage} pageId={"back"}/>
        </div>
    );
}