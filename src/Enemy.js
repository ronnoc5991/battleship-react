import React, { useContext, useState, useRef, useEffect } from 'react';
import EnemyRow from './EnemyRow';
import { GameContext } from './GameContext';
import gsap from 'gsap';

const Enemy = () => {
    const [number, setNumber] = useState(1);

    const {playerObject, enemyObject, orientation, setUp, refresher, game} = useContext(GameContext);
    const [player, setPlayer] = playerObject;
    const [enemy, setEnemy] = enemyObject;
    // const [direction, setDirection] = orientation;
    const [inSetupPhase, setInSetupPhase] = setUp;
    const [refresh, setRefresh] = refresher;
    const [gameIsOver, setGameIsOver] = game;

    var enemyBoard = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(enemyBoard, {opacity: 0}, {opacity: 1, duration: 1, delay: .6}); 
    }, [])

    while (enemy.shipsToPlace.length > 0) {
        randomPlacement();
    }

    function getRndInteger(min, max) { //includiing min and max
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }

    function randomPlacement () {
        let length = enemy.shipsToPlace[0];
        let orient = getRndInteger(0 , 1); 
        let row;
        let column;
        let bottleNeck = 10 - length;  
        if (orient === 1) { 
            orient = 'horizontal';
            row = getRndInteger(0 , 9);
            column = getRndInteger(0, bottleNeck); 
            } else if (orient === 0) { 
            orient = 'vertical';
            row = getRndInteger(0 , bottleNeck);
            column = getRndInteger(0 , 9);
            }

        let coordinates = [row, column];

        if (enemy.validMove(coordinates, orient, length)) {
            enemy.placeShip(coordinates, orient, length)
            } else {
            console.log('For some reason this enemy placement did not work');
            }
        }

    function takeAttack (e) {
        if (e.target.dataset.status === 'attackable') {
            if (e.target.dataset.coordinates) {
                let coordinates = e.target.dataset.coordinates
                enemy.receiveAttack(coordinates);
                retaliate();
                setRefresh(refresh + 1);
            }
        }
    }

    var guessed = [];

    function retaliate () {
        let coordinates;
        let foundGuess = false;
        while (!foundGuess) {
            coordinates = [getRndInteger(0 , 9), getRndInteger(0 , 9)];
            if (guessed.includes(coordinates)) {
            } else {
                guessed.push(coordinates);
                foundGuess = true;
            }
        }
        player.receiveAttack(coordinates);
        //if it is a hit... guess an adjacent set of coordinates
        //if not try somewhere else
        //save last attack coordiantes and result? outside of this function
    }


    return (
        <div className="enemy" ref= { el => { enemyBoard = el } }>
                <div className="enemy-board" onClick={ inSetupPhase ? undefined : takeAttack }>
                    { !inSetupPhase && <div className="arm"></div>}
                        <div className="circle circle-1"></div>
                        <div className="circle circle-2"></div>
                        <div className="circle circle-3"></div>
                        <div className="circle circle-4"></div>
                        { enemy.board.map((row, rowIndex) => {
                        return <EnemyRow row={row} rowIndex={ rowIndex } />
                        }) }
                </div>
        </div>
    )
}

export default Enemy;