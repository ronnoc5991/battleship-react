import React, { useState, createContext } from 'react';

const gameboardFactory = require('./gameboardFactory');
const playerFactory = require('./playerFactory');


export const PlayerContext = createContext();

export const PlayerProvider = (props) => {

    const [player, setPlayer] = useState(gameboardFactory());
    const [playerBoard, setPlayerBoard] = useState(player.board);

    return(
        <PlayerContext.Provider value={{object: [player, setPlayer], board: [playerBoard, setPlayerBoard]}}>
            { props.children }
        </PlayerContext.Provider>
    );
};