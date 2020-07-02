import React, { useState } from 'react';
import './App.css';
import Enemy from './Enemy';
import Player from './Player';
import UpperPanel from './UpperPanel';
import {GameProvider} from './GameContext';

function App() {
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
    <GameProvider>
      <div className="App" >
        <UpperPanel />
        <div className="bottom">
          <React.Fragment>
            <Player /> 
            <Enemy />
          </React.Fragment>
        </div>
      </div>
    </GameProvider>
  );
}

export default App;

// add screws to the light?
//create gameplay phases