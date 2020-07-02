import React, { useContext, useEffect } from 'react';
import Enemy from './Enemy';
import Player from './Player';
import UpperPanel from './UpperPanel';
import {GameContext} from './GameContext';

function Game() {

    const {playerObject, enemyObject, orientation, setUp, refresher} = useContext(GameContext);
    const [player, setPlayer] = playerObject;
    const [enemy, setEnemy] = enemyObject;
    const [direction, setDirection] = orientation;
    const [inSetupPhase, setInSetupPhase] = setUp;
    const [refresh, setRefresh] = refresher;

    function checkGameOver () {
        let playerWins = enemy.allSunk();
        let enemyWins = player.allSunk();
        if (playerWins || enemyWins) {
            return true;
        } else {
            return false;
        }
    }


        useEffect(() => {
            console.log('This is from refresh effect');
            let gameOver = checkGameOver();
            console.log(gameOver);
            if(gameOver) {
                console.log('game is over');
            }
        });


        //THESE GAMEOVER CHEKS ARE NOT WORKING

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

// let nextPlayer = true;

// const toggleTurn = () => {
//      nextPlayer = !nextPlayer;
// }

  return (
      <div className="Game" >
        <UpperPanel />
        <div className="bottom">
          <React.Fragment>
            <Player /> 
            <Enemy />
          </React.Fragment>
        </div>
      </div>
  );
}

export default Game;