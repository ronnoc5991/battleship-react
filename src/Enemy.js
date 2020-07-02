import React, { useContext, useState } from 'react';
import EnemyRow from './EnemyRow';
import { GameContext } from './GameContext';

const Enemy = (props) => {
    const [number, setNumber] = useState(1);

    const {playerObject, enemyObject, orientation, setUp} = useContext(GameContext);
    const [player, setPlayer] = playerObject;
    const [enemy, setEnemy] = enemyObject;
    // const [direction, setDirection] = orientation;
    const [inSetupPhase, setInSetupPhase] = setUp;

    while (enemy.shipsToPlace.length > 0) {
        randomPlacement();
    }

    function getRndInteger(min, max) { //includiing min and max
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }

    function randomPlacement () {
        let length = enemy.shipsToPlace[0];  //gets first ship and stores the length
        let orient = getRndInteger(0 , 1); //randomorientation function
        let row;
        let column;
        let bottleNeck = 10 - length;  //if length is 5 (10 - 5 = 5) the ship cannot be placed at a coordinate with a number higher than five for that orientation
        if (orient === 1) { //horizontal
            orient = 'horizontal';
            row = getRndInteger(0 , 9);//random number between 0 and 9
            column = getRndInteger(0, bottleNeck); //random number between 0 and bottleNeck
            } else if (orient === 0) { //vertical
            orient = 'vertical';
            row = getRndInteger(0 , bottleNeck); //random number between 0 and bottleNeck
            column = getRndInteger(0 , 9);//random number between 0 and 9
            }

        let coordinates = [row, column];

        if (enemy.validMove(coordinates, orient, length)) {
            enemy.placeShip(coordinates, orient, length)
            } else {
            console.log('For some reason this enemy placement did not work');
            }
        }

    function takeAttack (e) { //should maybe launch an attack after taking an attack
        if (e.target.dataset.coordinates) {
            let coordinates = e.target.dataset.coordinates
            enemy.receiveAttack(coordinates);
            setNumber(number + 1);
        }
    }

    return (
        <div className="enemy-side">
            <div className="enemy-board" onClick={ inSetupPhase ? undefined : takeAttack }>
                    <div className="arm"></div>
                    <div className="circle circle-1"></div>
                    <div className="circle circle-2"></div>
                    <div className="circle circle-3"></div>
                    <div className="circle circle-4"></div>
                    { enemy.board.map((row, rowIndex) => {
                    return <EnemyRow row={row} rowIndex={ rowIndex } />
                    }) }
            </div>
            <div className="ship-holder">
                <div className="ship ship-5-horizontal"></div>
                <div className="ship ship-4-horizontal"></div>
                <div className="ship ship-3-horizontal"></div>
                <div className="ship ship-3-horizontal"></div>
                <div className="ship ship-2-horizontal"></div>
            </div>
        </div>
    )
}

export default Enemy;