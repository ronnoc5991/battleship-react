import React, { useState, createContext } from 'react';
const gameboardFactory = require('./gameboardFactory');
// const playerFactory = require('./playerFactory');


export const GameContext = createContext();

export const GameProvider = (props) => {

    const [player, setPlayer] = useState(gameboardFactory());

    const [enemy, setEnemy] = useState(gameboardFactory());

    const [inSetupPhase, setInSetupPhase] = useState(true);

    const [direction, setDirection] = useState(true);

    return(
        <GameContext.Provider value={{playerObject: [player, setPlayer], enemyObject: [enemy, setEnemy], orientation: [direction, setDirection], setUp: [inSetupPhase, setInSetupPhase]}}>
            { props.children }
        </GameContext.Provider>
    );
};