import React, { useContext, useState } from 'react';
import PlayerRow from './PlayerRow';
import {GameContext} from './GameContext';

const Player = (props) => {

    const {playerObject, enemyObject, orientation, setUp, refresher, game} = useContext(GameContext);
    const [player, setPlayer] = playerObject;
    const [enemy, setEnemy] = enemyObject;
    const [direction, setDirection] = orientation;
    const [inSetupPhase, setInSetupPhase] = setUp;
    const [refresh, setRefresh] = refresher;
    const [gameIsOver, setGameIsOver] = game;


    return (
        <div className="player" id={ inSetupPhase ? 'setup' : '' } >
                <div className="player-board" >
                    {player.board.map((row, rowIndex) => {
                    return <PlayerRow row={row} rowIndex={ rowIndex }/>
                    }) }
                </div>
        </div>
    )
}

export default Player;