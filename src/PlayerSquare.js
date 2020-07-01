import React, { useContext, useState } from 'react';
import { PlayerContext } from './PlayerContext';

const PlayerSquare = (props) => {

    const [counter, setCounter] = useState(1);
    const { object, board , orientation} = useContext(PlayerContext);
    const [player, setPlayer] = object;
    const [playerBoard, setPlayerBoard] = board;
    const [direction, setDirection] = orientation;

    function dragover (e) {
        e.preventDefault();
        // let placementDirection;
        // if (direction === true) {
        //     placementDirection = 'horizontal';
        // } else {
        //     placementDirection = 'vertical';
        // }
        // let coordinates = e.target.dataset.coordinates
        // let length = Number(e.dataTransfer.getData("text"));
        // console.log(player.validMove(coordinates, placementDirection, length)); //this seems to always return true
    }

    function drop (e) {
        e.preventDefault();
        let placementDirection;
        if (direction === true) {
            placementDirection = 'horizontal';
        } else {
            placementDirection = 'vertical';
        }
        let coordinates = e.target.dataset.coordinates
        let length = Number(e.dataTransfer.getData("text"));
        if (player.validMove(coordinates, placementDirection, length)) {
            player.placeShip(coordinates, placementDirection, length); 
            player.removeShip(length);
        } else {
            console.log('unsuccessful drop')
        }
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