import React, { useContext, useEffect, useState } from 'react';
import Enemy from './Enemy';
import Player from './Player';
import ControlPanel1 from './ControlPanel1'
import ControlPanel2 from './ControlPanel2';
import {GameContext} from './GameContext';
import ShipPlacer from './ShipPlacer';
import GameOver from './GameOver';

function Game() {

    const {playerObject, enemyObject, orientation, setUp, refresher, game, shiftObject} = useContext(GameContext);
    const [player, setPlayer] = playerObject;
    const [enemy, setEnemy] = enemyObject;
    const [direction, setDirection] = orientation;
    const [inSetupPhase, setInSetupPhase] = setUp;
    const [refresh, setRefresh] = refresher;
    const [gameIsOver, setGameIsOver] = game;
    const [shift, setShift] = shiftObject;

    let winner;

    function checkGameOver () {
      if (inSetupPhase) {
        return false;
      } else {
        let playerWins = enemy.allSunk();
        let enemyWins = player.allSunk();
        if (playerWins || enemyWins) {
          if (playerWins) {
            winner = 'player'
          } else {
            winner = 'computer'
          }
            return true;
        } else {
            return false;
        }
      }
    }


    useEffect(() => {
        console.log('This is from refresh effect');
        let gameOver = checkGameOver();
        if(gameOver) {
            setGameIsOver(true);
        }
    }, [refresh]);


  return (
      <div className={`Game ${ shift ? 'started' : '' }`} >
        { gameIsOver && <GameOver winner={enemy.allSunk()} /> }
          <React.Fragment>
            { inSetupPhase ? <ShipPlacer /> : '' }
            
            {/* <ControlPanel1 /> */}
            <Player /> 
            {/* <ControlPanel2 /> */}
            { inSetupPhase ? '' : <Enemy /> }
          </React.Fragment>
      </div>
  );
}

export default Game;