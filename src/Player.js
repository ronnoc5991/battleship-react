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

    player.placeShip([0,0], 'horizontal', 2); //hardcode ship placement
    player.placeShip([1,0], 'horizontal', 4);
    player.placeShip([2,0], 'horizontal', 3);
    player.placeShip([3,0], 'horizontal', 3);
    player.placeShip([4,0], 'horizontal', 5);

    function refresh (e) {
        setNumber(number + 1);
    }

    return (
        <div className="player-side">
            <div className="ship-holder">
                { shipsToPlace.map((ship) => {
                    return <DraggableShips length={ ship } />
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