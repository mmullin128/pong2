import { useState } from 'react';

export default function MenuButton({buttonText, renderPage, pageId}) { //button will pass the pageId to render into the renderPage function 

    return (
        <button className='menu-btn' onClick={() => renderPage(pageId)}>{buttonText}</button>
    );
}