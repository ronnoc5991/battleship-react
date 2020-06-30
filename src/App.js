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

  // place ships in the player component
  // click a button that starts the game
  // this button toggles the inSetupPhase value to false
  //enemy board is now rendered

//GAME PHASE
  //player should go first
  //they click on 1 place 



//main game loop should have two phases...
  //const inSetUpPhase = true
    //create players and gameboards
    //player can edit gameboard
    //player clicks button to start game
    //button toggles inSetupPhase to false
    //React Changes Display based on truthiness of that variable
      //when the setup is true... the enemies board should not be displayed... only the players
      //when the setup is false... the enemies boards should be displayed without ships

//game should start in set up mode
//after the ships have been placed the game can begin
//turns are had and shots are taken
//at the beginning of each turn, a game over check should be run 
    //this consists of a allSunk() call on each gameboard
        //if one returns true, this is the loser

let nextPlayer = true;

const toggleTurn = () => {
     nextPlayer = !nextPlayer;
}

// function stopContextMenu (e) { 
//   e.preventDefault();
// }
// onContextMenu={ stopContextMenu }

  return (
    <PlayerProvider>
    <EnemyProvider>
    <div className="App" >
          <React.Fragment>
          <Player /> 
          <Enemy />
          </React.Fragment>
    </div>
    </EnemyProvider>
    </PlayerProvider>
  );

//could always display both radar screens.... during setup Phase the enemy radar could have fuzzy filter...
//as if it were broken like an old tv... white snow

  // return (
  //   <PlayerProvider>
  //   <EnemyProvider>
  //     { inSetupPhase ? 
  //       <div className="setup-stage">
  //         <ShipPlacement />
  //         <Player />
  //         </div> : 
  //         <div className="game-stage">
  //         <Player />
  //         <Enemy />
  //         </div> }
  //   </EnemyProvider>
  //   </PlayerProvider>
  // );
}

export default App;
