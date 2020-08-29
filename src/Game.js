import React, { useContext, useEffect, useState } from 'react';
import Enemy from './Enemy';
import Player from './Player';
import UpperPanel from './UpperPanel';
import {GameContext} from './GameContext';
import ShipPlacer from './ShipPlacer';

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

      function endIntro () {
        setIntro(false);
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


  return (
      <div className="Game" >
        <UpperPanel />
        { gameIsOver && <div className="end-game-popup"> Game Over</div> }
        {/* <div className={`${ gameIsOver ? 'unclickable' : ''}` }> */}
          <React.Fragment>
            {/* { intro ? <div className="intro">
            <div className="handle-1">
              <div className="axis-1"></div>
              <div className="axis-2"></div>
              <div className="handle-center"></div>
            </div>
              <div className="door-1">
                <div className="door-2">
                  <div className="door-window" onClick={ endIntro }>
                    <div className="screw screw-1"></div>
                    <div className="screw screw-2"></div>
                    <div className="screw screw-3"></div>
                    <div className="screw screw-4"></div>
                    <div className="screw screw-5"></div>
                    <div className="screw screw-6"></div>
                    <div className="screw screw-7"></div>
                    <div className="screw screw-8"></div>
                  </div>
                </div>
              </div>
            </div> : null} */}
            <Player /> 
            { inSetupPhase ? <ShipPlacer /> : null }
            <Enemy />
          </React.Fragment>
        {/* </div> */}
      </div>
  );
}

export default Game;