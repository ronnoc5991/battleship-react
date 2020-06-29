import React, { useContext, useState } from 'react';
import EnemyRow from './EnemyRow';
import {EnemyContext} from './EnemyContext'

const Enemy = () => {
    const [number, setNumber] = useState(1);
    const { object, board } = useContext(EnemyContext);
    const [enemy, setEnemy] = object;
    const [enemyBoard, setEnemyBoard] = board;

enemy.placeShip([0,0], 'horizontal', 5); //hardcode ship placement
enemy.placeShip([1,0], 'horizontal', 4);
enemy.placeShip([2,0], 'horizontal', 3);
enemy.placeShip([3,0], 'horizontal', 3);
enemy.placeShip([4,0], 'horizontal', 2);

// function shipPlacement (e) {
//     console.log(e.target.dataset.coordinates);
//     let coordinates = e.target.dataset.coordinates
//     console.log(e.target.dataset.board);
//     .placeShip(coordinates, 'horizontal', 3);
//     console.log(enemyBoard);
//     //the board is being changed by these function calls...
//     //but the visuals are not being updates according to styles
// }

function takeAttack (e) {
    let coordinates = e.target.dataset.coordinates
    enemy.receiveAttack(coordinates); //attack is received well and recorded on the board... but it is not re rendering the dom
    console.log(enemyBoard);
    setNumber(number + 1);
    console.log(number);
}

    return (
        <div className="enemy-board" onClick={ takeAttack }>
                <div className="arm"></div>
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
                <div className="circle circle-4"></div>
                { enemyBoard.map((row, rowIndex) => {
                return <EnemyRow row={row} rowIndex={ rowIndex } />
                }) }
        </div>
    )
}

export default Enemy;