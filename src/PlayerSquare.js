import React, { useContext, useState } from 'react';
import { GameContext } from './GameContext';

const PlayerSquare = (props) => {

    const {playerObject, enemyObject, orientation, setUp, refresher, game} = useContext(GameContext);
    const [player, setPlayer] = playerObject;
    const [enemy, setEnemy] = enemyObject;
    const [direction, setDirection] = orientation;
    const [inSetupPhase, setInSetupPhase] = setUp;
    const [refresh, setRefresh] = refresher;
    const [gameIsOver, setGameIsOver] = game;

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
        } else {
            console.log('unsuccessful drop')
        }
        setRefresh(refresh + 1);
    }

    return (
        <div  onDragOver={ props.square === '-' ?  dragover  : undefined}  data-status={ (props.square === 'm') ? 'miss' : 'notamiss' } onDrop={ props.square === '-' ?  drop  : undefined} 
            className={ `player-square ${ props.square === '-' ? "untouched" : "" } ${ (props.square !== '-' && props.square !== 'm' && props.square !== 'x') ? 'placed-ship' : "" }`} key={`[${props.rowIndex}, ${ props.squareIndex }]`} data-coordinates={ [`${props.rowIndex}${ props.columnIndex }`] } >
                        { props.square === 'm' ? <div className="missed" ></div> : null}
                        { props.square === 'x' ? <div className="hit placed-ship" ></div> : null}
                        {/* { (props.square !== '-' && props.square !== 'm' && props.square !== 'x') ? <div className="placed"> </div> : "" } */}
        </div>
    )

}

export default PlayerSquare;