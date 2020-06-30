import React, { useContext, useState } from 'react';
import { PlayerContext } from './PlayerContext';

const PlayerSquare = (props) => {

    const [counter, setCounter] = useState(1);
    const { object, board } = useContext(PlayerContext);
    const [player, setPlayer] = object;
    const [playerBoard, setPlayerBoard] = board;

    function dragover (e) {
        e.preventDefault();
    }

    function drop (e) {
        e.preventDefault();
        let coordinates = e.target.dataset.coordinates
        let length = Number(e.dataTransfer.getData("text"));
        player.placeShip(coordinates, 'vertical', length); //work out how to change orientation of the ships
        //if the ship is placed correctly... the ship should be removed from the toBeplaced array
        setCounter(counter + 1);
    }

    return (
        <div  onDragOver={ props.square === '-' ?  dragover  : undefined}  onDrop={ props.square === '-' ?  drop  : undefined} className={ `player-square ${ props.square === 'x' ? "hit" : ""} 
                                        ${ props.square === 'm' ? "miss" : "" }
                                        ${ props.square === '-' ? "untouched" : "placed-ship" }`} key={`[${props.rowIndex}, ${ props.squareIndex }]`} data-coordinates={ [`${props.rowIndex}${ props.columnIndex }`] } >
        </div>
    )

}

export default PlayerSquare;