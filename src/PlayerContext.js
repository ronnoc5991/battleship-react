import React, { useState, createContext } from 'react';

const gameboardFactory = require('./gameboardFactory');
const playerFactory = require('./playerFactory');


export const PlayerContext = createContext();

export const PlayerProvider = (props) => {

    const [player, setPlayer] = useState(gameboardFactory());
    const [playerBoard, setPlayerBoard] = useState(player.board);

    const [direction, setDirection] = useState(true);

    return(
        <PlayerContext.Provider value={{object: [player, setPlayer], board: [playerBoard, setPlayerBoard], orientation: [direction, setDirection]}}>
            { props.children }
        </PlayerContext.Provider>
    );
};