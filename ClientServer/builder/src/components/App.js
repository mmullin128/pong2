import { useState } from 'react';
import globals from './globals.js';
import Menu from './Menu.js';
import MenuButton from './MenuButton.js';
import BackButton from './BackButton.js';
import Alert from './Alert.js';
import InputTable from './InputTable.js';
import Lobby from './Lobby.js';
import GameContainer from './GameContainer.js';
export default function App() {

    const gotoMenu = (menuId) => {
        setCurrentMenu(menuId);
    }
    const gotoAlert = (alertId) => {
        setCurrentAlert(alertId);
    }
    const [currentMenu, setCurrentMenu] = useState(globals.MENUS.MAIN);
    const [currentAlert, setCurrentAlert] = useState(globals.MENUS.MAIN);

    return (
        <div id="app">

            <Menu id={globals.MENUS.MAIN} isRendered={(currentMenu == globals.MENUS.MAIN)} components={[
                <h1 id='main-menu-title'>PaddleBallOnline</h1>,
                <MenuButton id={"play-now-btn"} buttonText={"Play Now"} onClick={[() => gotoAlert(globals.ALERTS.USERNAME_ALERT)]} />,
                <MenuButton id={"private-game-btn"} buttonText={"Private Game"} onClick={[() => gotoMenu(globals.MENUS.PRIVATE_GAME)]}/>
            ]}/>

            <Menu id={globals.MENUS.PRIVATE_GAME} isRendered={(currentMenu == globals.MENUS.PRIVATE_GAME)} components={[
                <h1 id='private-game-menu-title'>Private Game</h1>,
                <MenuButton id={"create-game-btn"} buttonText={"Create Game"} onClick={[() => gotoMenu(globals.MENUS.CREATE_GAME_MENU)]} />,
                <MenuButton id={"join-game-btn"} buttonText={"Join Game"} onClick={[() => gotoAlert(globals.ALERTS.GAME_CODE_ALERT)]} />,
                <BackButton id={"private-game-menu-back-btn"} onClick={() => gotoMenu(globals.MENUS.MAIN)}/>
            ]}/>

            <Menu id={globals.MENUS.CREATE_GAME_MENU} isRendered={(currentMenu == globals.MENUS.CREATE_GAME_MENU)} components={[
                <BackButton id={"create-game-menu-back-btn"} onClick={() => gotoMenu(globals.MENUS.PRIVATE_GAME)} />,
                <h2>Choose Game Options</h2>,
                <InputTable 
                    id={"create-game-input-table"}
                    data = {[
                        {
                            "name": "Players",
                            "type": "number",
                            "default" : "2",
                            "min" : "2",
                            "max" : "4"
                        },
                        {
                            "name": "Abilities",
                            "type": "number",
                            "default" : "1",
                            "min" : "0",
                            "max" : "3"
                        },
                        {
                            "name": "Player Speed",
                            "type": "range",
                            "default" : "5",
                            "min" : "0",
                            "max" : "10"
                        },
                        {
                            "name": "Player Size",
                            "type": "range",
                            "default" : "5",
                            "min" : "0",
                            "max" : "10"
                        },
                        {
                            "name": "Ball Speed",
                            "type": "range",
                            "default" : "5",
                            "min" : "0",
                            "max" : "10"
                        },
                        {
                            "name": "Ball Size",
                            "type": "range",
                            "default" : "5",
                            "min" : "0",
                            "max" : "10"
                        },
                        {
                            "name": "Ball Spin",
                            "type": "range",
                            "default" : "5",
                            "min" : "0",
                            "max" : "10"
                        }
                    ]}
                />,
                <MenuButton id={"create-lobby-btn"} buttonText={"Go"} onClick={[
                    () => {
                        gotoMenu(globals.MENUS.LOBBY_MENU);
                    }
                ]}/>
            ]}/>

            <Menu id={globals.MENUS.CHOOSE_LOADOUT_MENU} isRendered={(currentMenu == globals.MENUS.CHOOSE_LOADOUT_MENU)} components={[
                <h1>Choose Loadout</h1>,
                <BackButton id={"choose-loadout-menu-back-btn"} onClick={() => gotoMenu(globals.MENUS.MAIN)}/>,
                <InputTable 
                    id={"choose-loadout-input-table"}
                    data = {[
                        {
                            "name": "Speed",
                            "type": "range",
                            "default" : "5",
                            "min" : "0",
                            "max" : "10"
                        },
                        {
                            "name": "Length",
                            "type": "range",
                            "default" : "5",
                            "min" : "0",
                            "max" : "10"
                        },
                        {
                            "name": "Turning Speed",
                            "type": "range",
                            "default" : "5",
                            "min" : "0",
                            "max" : "10"
                        },
                    ]}
                />,
                <MenuButton id={"choose-loadout-btn"} buttonText={"Go"} onClick={[
                    () => {
                        gotoAlert(globals.ALERTS.LOADING_ALERT);
                    }
                ]}/>
            ]}/>

            <Menu id={globals.MENUS.LOBBY_MENU} isRendered={(currentMenu == globals.MENUS.LOBBY_MENU)} components={[
                <h2>Choose Sides</h2>,
                <Lobby id={"players-lobby"}/>,
                <MenuButton id={"ready-btn"} buttonText={"Ready"} onClick={[
                    () => gotoAlert(globals.ALERTS.LOADING_ALERT)
                ]}/>
            ]}
            />

            <Menu id={globals.MENUS.GAME} isRendered={(currentMenu == globals.MENUS.GAME)} components={[
                <GameContainer id={globals.GAME_CONTAINERS.DEFAULT} />
            ]}/>

            <Alert id={globals.ALERTS.GAME_CODE_ALERT} isRendered={(currentAlert == globals.ALERTS.GAME_CODE_ALERT)} components={[
                <h1>Enter GameCode</h1>,
                <BackButton id={"game-code-alert-back-btn"} onClick={() => gotoAlert(null)}/>
            ]}/>

            <Alert id={globals.ALERTS.USERNAME_ALERT} isRendered={(currentAlert == globals.ALERTS.USERNAME_ALERT)} components={[
                <h1>Username</h1>,
                <BackButton id={"username-alert-back-btn"} onClick={() => gotoAlert(null)}/>
            ]}/>

        </div>
    );
}