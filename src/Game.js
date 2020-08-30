import React, { useContext, useEffect, useState } from 'react';
import Enemy from './Enemy';
import Player from './Player';
import UpperPanel from './UpperPanel';
import {GameContext} from './GameContext';
import ShipPlacer from './ShipPlacer';
import GameOver from './GameOver';

function Game() {

    const {playerObject, enemyObject, orientation, setUp, refresher, game} = useContext(GameContext);
    const [player, setPlayer] = playerObject;
    const [enemy, setEnemy] = enemyObject;
    const [direction, setDirection] = orientation;
    const [inSetupPhase, setInSetupPhase] = setUp;
    const [refresh, setRefresh] = refresher;
    const [gameIsOver, setGameIsOver] = game;
    const [intro, setIntro] = useState(true);

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

      function endIntro () {
        setIntro(false);
      }


        useEffect(() => {
            console.log('This is from refresh effect');
            let gameOver = checkGameOver();
            if(gameOver) {
                setGameIsOver(true);
            }
        }, [refresh]);


  return (
      <div className="Game" >
        <UpperPanel />
        { gameIsOver && <GameOver winner={enemy.allSunk()} /> }
        {/* <div className={`${ gameIsOver ? 'unclickable' : ''}` }> */}
          <React.Fragment>
            <Player /> 
            { inSetupPhase ? <ShipPlacer /> : null }
            <Enemy />
          </React.Fragment>
        {/* </div> */}
      </div>
  );
}

export default Game;