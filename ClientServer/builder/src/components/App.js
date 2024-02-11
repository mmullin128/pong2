import { useState } from 'react';
import globals from './globals.js';
import Menu from './Menu.js';
import MenuButton from './MenuButton.js';
import BackButton from './BackButton.js';
export default function App() {

    const goto = (menuId) => {
        setCurrentMenu(menuId);
    }

    const [currentMenu, setCurrentMenu] = useState(globals.MENUS.MAIN);

    return (
        <div id="app">

            <Menu id={globals.MENUS.MAIN} isRendered={(currentMenu == globals.MENUS.MAIN)} components={[
                <h1 id='main-menu-title'>PaddleBallOnline</h1>,
                <MenuButton id={"play-now-btn"} buttonText={"Play Now"} goto={() => goto(globals.MENUS.USERNAME)} />,
                <MenuButton id={"private-game-btn"} buttonText={"Private Game"} goto={() => goto(globals.MENUS.PRIVATE_GAME)}/>
            ]}/>

            <Menu id={globals.MENUS.USERNAME} isRendered={(currentMenu == globals.MENUS.USERNAME)} components={[
                <h1 id='username-menu-title'>Username</h1>,
                <BackButton id={"username-menu-back-btn"} goto={() => goto(globals.MENUS.MAIN)}/>
            ]}/>

            <Menu id={globals.MENUS.PRIVATE_GAME} isRendered={(currentMenu == globals.MENUS.PRIVATE_GAME)} components={[
                <h1 id='private-game-menu-title'>Private Game</h1>,
                <BackButton id={"private-game-menu-back-btn"} goto={() => goto(globals.MENUS.MAIN)}/>
            ]}/>

        </div>
    );
}