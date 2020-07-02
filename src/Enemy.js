import React, { useContext, useState } from 'react';
import EnemyRow from './EnemyRow';
import {EnemyContext} from './EnemyContext'

const Enemy = (props) => {
    const [number, setNumber] = useState(1);
    const { object, board } = useContext(EnemyContext);
    const [enemy, setEnemy] = object;
    const [enemyBoard, setEnemyBoard] = board;

enemy.placeShip([0,0], 'horizontal', 5); //hardcode ship placement
enemy.placeShip([1,0], 'horizontal', 4);
enemy.placeShip([2,0], 'horizontal', 3);
enemy.placeShip([3,0], 'horizontal', 3);
enemy.placeShip([4,0], 'horizontal', 2);

//while enemy.shipsToPlace.length > 0
// function randomPlacement () {
//  let length = enemy.shipsToPlace[0] ----gets first ship from the array and stores the length
//  let coordinates;
//  let orientation = randomOrientation
//  get first ship from the array
//  generate random coordinates based on the length of the ship
//  let limitingCoordinate = 10 - length;     if length is 5 (10 - 5 = 5) the ship cannot be placed at a coordinate with a number higher than five for that orientation
//  if (orientation ==== 'horizontal) {
//      let row = random number between 0 and 9
//      let column = random number between 0 and limitingCoordinate
//}
//  if (orienation === 'vertical) {
//      let row = random number between 0 and limitingCoordinate
//      let column = random number between 0 and 9
//}
//  make sure the placement is valid
//  if (enemy.validMove(coordinates, orientation, length)) {
//      enemy.placeShip(coordinates, orientaiton, length)
//}  else {
//      do it again
//}
//  call the placeShip method on enemy and move onto the next ship 
//}

//when the setup Phase is true... the board should not be clickable

function takeAttack (e) {
    let coordinates = e.target.dataset.coordinates
    enemy.receiveAttack(coordinates);
    setNumber(number + 1);
}

    return (
        <div className="enemy-side">
            <div className="enemy-board" onClick={ props.setUp ? undefined : takeAttack }>
                    <div className="arm"></div>
                    <div className="circle circle-1"></div>
                    <div className="circle circle-2"></div>
                    <div className="circle circle-3"></div>
                    <div className="circle circle-4"></div>
                    { enemyBoard.map((row, rowIndex) => {
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