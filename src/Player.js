import React, { useContext, useState } from 'react';
import PlayerRow from './PlayerRow';
import { PlayerContext } from './PlayerContext';
import DraggableShips from './DraggableShips';

const Player = () => {

    const [number, setNumber] = useState(1);
    const { object, board } = useContext(PlayerContext);
    const [player, setPlayer] = object;
    const [playerBoard, setPlayerBoard] = board;

    const shipsToPlace = [5, 4, 3, 3, 2];

    function refresh (e) {
        setNumber(number + 1);
    }

    function logThis () {
        console.log('This is from player dude')
    }

    return (
        <div className="player-side">
            <div className="ship-holder">
                { shipsToPlace.map((ship, shipIndex) => {
                    return <DraggableShips length={ ship } index={ shipIndex } onClick={logThis}/>
                }) }
            </div>
            <div className="player-board" onMouseOver={ refresh }>
                <div className="pulse"></div>
                <div className="player-circle circle-1"></div>
                <div className="player-circle circle-2"></div>
                <div className="player-circle circle-3"></div>
                <div className="player-circle circle-4"></div>
                {playerBoard.map((row, rowIndex) => {
                return <PlayerRow row={row} rowIndex={ rowIndex }/>
                }) }
            </div>
        </div>
    )
}

export default Player;