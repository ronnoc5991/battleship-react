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

    function refreshIt (e) {
        setRefresh(refresh + 1);
    }

    // function toggleDirection () {
    //     setDirection(!direction);
    // }

    return (
        <div className="player-side">
                <div className="status-border">
                    <div className="ship-status-container">
                        <div className="ship carrier"></div>
                        <div className="ship battleship"></div>
                        <div className="ship cruiser"></div>
                        <div className="ship submarine"></div>
                        <div className="ship destroyer"></div>
                    </div>
                </div>
                {/* <button className={`rotate-button ${ direction ? 'rotated' : undefined }`} onClick={ toggleDirection }>
                    <div className="switch">
                        <div className="arrow"></div>
                    </div>
                </button> */}
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
                    <div className="pulse"></div>
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

// on dragstart the ship should size up as if it were being picked up and size back down on drop?

// onMouseOver={ refreshIt }