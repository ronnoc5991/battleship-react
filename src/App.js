import React, { useState } from 'react';
import './App.css';
import EnemyBoard from './EnemyBoard';
import PlayerBoard from './PlayerBoard'
const gameboardFactory = require('./gameboardFactory');
const playerFactory = require('./playerFactory');

function App() {

const [inSetupPhase, setInSetupPhase] = useState(false);

const [enemyBoard, setEnemyBoard] = useState(gameboardFactory());

const [playerBoard, setPlayerBoard] = useState(gameboardFactory());

enemyBoard.placeShip([0,0], 'horizontal', 5); //hardcode ship placement
enemyBoard.placeShip([1,0], 'horizontal', 4);
enemyBoard.placeShip([2,0], 'horizontal', 3);
enemyBoard.placeShip([3,0], 'horizontal', 3);
enemyBoard.placeShip([4,0], 'horizontal', 2);

playerBoard.placeShip([0,0], 'horizontal', 2); //hardcode ship placement
playerBoard.placeShip([1,0], 'horizontal', 4);
playerBoard.placeShip([2,0], 'horizontal', 3);
playerBoard.placeShip([3,0], 'horizontal', 3);
playerBoard.placeShip([4,0], 'horizontal', 5);



//main game loop should have two phases...
  //const inSetUpPhase = true
    //create players and gameboards
    //player can edit gameboard
    //player clicks button to start game
    //button toggles inSetupPhase to false
    //React Changes Display based on truthiness of that variable
      //when the setup is true... the enemies board should not be displayed... only the players
      //when the setup is false... the enemies boards should be displayed without ships

//import the modules into this component and call the functions here?

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


//rework the architecture of the app
  //App
//Player     Computer      Data stored here?
//Board       Board
//Row         Row
//Square      Square



  return (
    <div className="App">
      { inSetupPhase ? 
          <PlayerBoard /> : 
          <React.Fragment>
          <PlayerBoard board={ playerBoard }/>
          <EnemyBoard board={ enemyBoard }/>
          </React.Fragment> }
    </div>
  );
}

export default App;
