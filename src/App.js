import React, { useState } from 'react';
import './App.css';
import Enemy from './Enemy';
import Player from './Player';
import {PlayerProvider} from './PlayerContext';
import {EnemyProvider} from './EnemyContext';
// const gameboardFactory = require('./gameboardFactory');
// const playerFactory = require('./playerFactory');

function App() {

const [inSetupPhase, setInSetupPhase] = useState(false);

//main game loop should have two phases...
  //const inSetUpPhase = true
    //create players and gameboards
    //player can edit gameboard
    //player clicks button to start game
    //button toggles inSetupPhase to false
    //React Changes Display based on truthiness of that variable
      //when the setup is true... the enemies board should not be displayed... only the players
      //when the setup is false... the enemies boards should be displayed without ships

let nextPlayer = true;


// const player1 = playerFactory('Real Player');
// const player2 = playerFactory('Computer Player');

//game should start in set up mode
//after the ships have been placed the game can begin
//turns are had and shots are taken
//at the beginning of each turn, a game over check should be run 
    //this consists of a allSunk() call on each gameboard
        //if one returns true, this is the loser


const toggleTurn = () => {
     //function that passes the turn from the computer to the player
     nextPlayer = !nextPlayer;
}

  return (
    <PlayerProvider>
    <EnemyProvider>
    <div className="App">
      { inSetupPhase ? 
          <Player /> : 
          <React.Fragment>
          <Player />
          <Enemy />
          </React.Fragment> }
    </div>
    </EnemyProvider>
    </PlayerProvider>
  );
}

export default App;
