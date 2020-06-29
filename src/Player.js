import React, { useContext, useState } from 'react';
import PlayerRow from './PlayerRow';
import { PlayerContext } from './PlayerContext';

const Player = () => {

    const [number, setNumber] = useState(1);
    const { object, board } = useContext(PlayerContext);
    const [player, setPlayer] = object;
    const [playerBoard, setPlayerBoard] = board;

    // const [playerBoard, setPlayerBoard] = useContext(PlayerContext);


    player.placeShip([0,0], 'horizontal', 2); //hardcode ship placement
    player.placeShip([1,0], 'horizontal', 4);
    player.placeShip([2,0], 'horizontal', 3);
    player.placeShip([3,0], 'horizontal', 3);
    player.placeShip([4,0], 'horizontal', 5);

    function shipPlacement (e) {
    let coordinates = e.target.dataset.coordinates
    console.log(coordinates);
    console.log(playerBoard);
    // .placeShip(coordinates, 'horizontal', 3);
    //the board is being changed by these function calls...
    //but the visuals are not being updates according to styles
    }

    return (
        <div className="player-board" onClick={ shipPlacement }>
            <div className="player-circle circle-1"></div>
            <div className="player-circle circle-2"></div>
            <div className="player-circle circle-3"></div>
            <div className="player-circle circle-4"></div>
            {playerBoard.map((row, rowIndex) => {
            return <PlayerRow row={row} rowIndex={ rowIndex }/>
            }) }
        </div>
    )
}

export default Player;