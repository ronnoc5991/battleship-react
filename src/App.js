import React, { useState } from 'react';
import './App.css';
import Enemy from './Enemy';
import Player from './Player';
import {PlayerProvider} from './PlayerContext';
import {EnemyProvider} from './EnemyContext';
// const gameboardFactory = require('./gameboardFactory');
// const playerFactory = require('./playerFactory');

function App() {

const [inSetupPhase, setInSetupPhase] = useState(true);

//SETUP PHASE

  //enemy board should not be clickable
  //enemy radar should have some cool fuzz/static effect
  // place ships in the player component
  // click a button that starts the game
  // this button toggles the inSetupPhase value to false

//GAME PHASE
  //player should go first
  //they click on 1 place 
  //enemy attacks their ships
  //worry about timing later and AI can be dumn for now
  //at the beginning of each turn, a game over check should be run 
    //this consists of a allSunk() call on each gameboard
        //if one returns true, this is the loser

let nextPlayer = true;

const toggleTurn = () => {
     nextPlayer = !nextPlayer;
}

  return (
    <PlayerProvider>
    <EnemyProvider>
    <div className="App" >
      <div className="top">
        <div className="light">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="spinners">
            <div className="spinner-1"></div>
            <div className="spinner-2"></div>
          </div>
          <div className="inner">
          </div>
        </div>
      </div>
      <div className="bottom">
          <React.Fragment>
          <Player /> 
          <Enemy />
          </React.Fragment>
      </div>
    </div>
    </EnemyProvider>
    </PlayerProvider>
  );
}

export default App;
