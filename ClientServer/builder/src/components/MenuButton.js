import { useState } from 'react';

export default function MenuButton({id, buttonText, goto, fns=[]}) {

    return (
        <button id={id} className='menu-btn' onClick={() => {
            goto();
            for (let fn of fns) {
                fn();
            }
        }}>{buttonText}</button>
    );
}