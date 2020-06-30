import React, { useContext, useState } from 'react';
import PlayerRow from './PlayerRow';
import { PlayerContext } from './PlayerContext';

const Player = (props) => {

    const [number, setNumber] = useState(1);
    const { object, board } = useContext(PlayerContext);
    const [player, setPlayer] = object;
    const [playerBoard, setPlayerBoard] = board;

    const inSetupPhase = props.setup;
    console.log(`this is from player${inSetupPhase}`);

    player.placeShip([0,0], 'horizontal', 2); //hardcode ship placement
    player.placeShip([1,0], 'horizontal', 4);
    player.placeShip([2,0], 'horizontal', 3);
    player.placeShip([3,0], 'horizontal', 3);
    player.placeShip([4,0], 'horizontal', 5);

    function shipPlacement (e) { //places ships... this should be available during setup Phase
    let coordinates = e.target.dataset.coordinates
    player.placeShip(coordinates, 'vertical', 3);
    setNumber(number + 1);
    }

    return (
        <div className="player-board" onClick={ shipPlacement }>
            <div className="pulse"></div>
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