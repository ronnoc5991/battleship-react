import React, { useContext, useEffect, useState } from 'react';
import Enemy from './Enemy';
import Player from './Player';
import UpperPanel from './UpperPanel';
import {GameContext} from './GameContext';

function Game() {

    const {playerObject, enemyObject, orientation, setUp, refresher, game} = useContext(GameContext);
    const [player, setPlayer] = playerObject;
    const [enemy, setEnemy] = enemyObject;
    const [direction, setDirection] = orientation;
    const [inSetupPhase, setInSetupPhase] = setUp;
    const [refresh, setRefresh] = refresher;
    const [gameIsOver, setGameIsOver] = game;

    let winner;

    function checkGameOver () {
      if (inSetupPhase) {
        return false;
      } else {
        let playerWins = enemy.allSunk();
        let enemyWins = player.allSunk();
        if (playerWins || enemyWins) {
          if (playerWins) {
            winner = 'You win!'
          } else {
            winner = 'You lose!'
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
                console.log('game is over');
                setGameIsOver(true);
                console.log(gameIsOver);
            }
        }, [refresh]);



//SETUP PHASE

  //enemy radar should have some cool fuzz/static effect

//GAME PHASE
  //player should go first
  //they click on 1 place 
  //enemy attacks their ships
  //worry about timing later and AI can be dumb for now
  //at the beginning of each turn, a game over check should be run 
    //this consists of a allSunk() call on each gameboard
        //if one returns true, this is the loser

  return (
      <div className="Game" >
        <UpperPanel />
        { gameIsOver && <div className="end-game-popup"> Game Over</div> }
        <div className={`bottom ${ gameIsOver ? 'unclickable' : ''}` }>
          <React.Fragment>
            <Player /> 
            <Enemy />
          </React.Fragment>
        </div>
      </div>
  );
}

export default Game;