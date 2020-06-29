import React, { useState, createContext } from 'react';

const gameboardFactory = require('./gameboardFactory');
const playerFactory = require('./playerFactory');


export const EnemyContext = createContext();

export const EnemyProvider = (props) => {

    const [enemy, setEnemy] = useState(gameboardFactory());
    // let enemy = gameboardFactory();

    const [enemyBoard, setEnemyBoard] = useState(enemy.board);

    return(
        <EnemyContext.Provider value={{object: [enemy, setEnemy], board: [enemyBoard, setEnemyBoard]}}>
            { props.children }
        </EnemyContext.Provider>
    );
};