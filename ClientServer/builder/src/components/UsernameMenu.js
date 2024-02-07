import { useState } from 'react';
import MenuButton from './MenuButton.js';

export default function UsernameMenu({ renderPage }) {
    return (
        <div className='menu'>
            <h1 id='title'>Username</h1>
            <MenuButton buttonText={"back"} renderPage={renderPage} pageId={"back"}/>
        </div>
    );
}