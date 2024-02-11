import { useState } from 'react';

export default function Menu({ id, isRendered, components }) {
    return (
        <div className={`menu ${ isRendered ? "rendered" : "hidden"}`} id={id}>
            {components}
        </div>
    );
}