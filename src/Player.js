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
        <div className="player-side">
            <div className="side-label">FRIENDLY RADAR</div>
            <div className="border-space">
                <div className="screw screw-1"></div>
                <div className="screw screw-2"></div>
                <div className="screw screw-3"></div>
                <div className="screw screw-4"></div>
                <div className="screw screw-5"></div>
                <div className="screw screw-6"></div>
                <div className="screw screw-7"></div>
                <div className="screw screw-8"></div>
                <div className="player-board" >
                    <div className={ inSetupPhase ? '' : 'pulse'}></div>
                    <div className="player-circle circle-1"></div>
                    <div className="player-circle circle-2"></div>
                    <div className="player-circle circle-3"></div>
                    <div className="player-circle circle-4"></div>
                    {player.board.map((row, rowIndex) => {
                    return <PlayerRow row={row} rowIndex={ rowIndex }/>
                    }) }
                </div>
            </div>
        </div>
    )
}

export default Player;