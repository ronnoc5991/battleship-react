import React, { useContext, useState } from 'react';
import PlayerRow from './PlayerRow';
import DraggableShips from './DraggableShips';
import {GameContext} from './GameContext';

const Player = (props) => {

    const [number, setNumber] = useState(1);

    const {playerObject, enemyObject, orientation, setUp} = useContext(GameContext);
    const [player, setPlayer] = playerObject;
    const [enemy, setEnemy] = enemyObject;
    const [direction, setDirection] = orientation;
    const [inSetupPhase, setInSetupPhase] = setUp;

    function refresh (e) {
        setNumber(number + 1);
    }

    function toggleDirection () {
        setDirection(!direction);
    }

    return (
        <div className="player-side">
            <div className="player-left">
                <div className="ship-holder">
                    { inSetupPhase ? player.shipsToPlace.map((ship, shipIndex) => {
                        return <DraggableShips length={ ship } index={ shipIndex } direction={ direction } />
                    }) : 'Game has begun' }
                </div>
                <button className={`rotate-button ${ direction ? 'rotated' : undefined }`} onClick={ toggleDirection }>
                    <div className="switch">
                        <div className="arrow"></div>
                    </div>
                </button>
            </div>
            <div className="player-board" onMouseOver={ refresh }>
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
    )
}

export default Player;

// on dragstart the ship should size up as if it were being picked up and size back down on drop?