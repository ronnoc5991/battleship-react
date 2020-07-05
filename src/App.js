import React from 'react';
import './App.css';
import Game from './Game';
import {GameProvider} from './GameContext';

function App() {

  return (
    <GameProvider>
      <div className="App" >
        <Game />
      </div>
    </GameProvider>
  );
}

export default App;

// add screws to the light?


// Add start button to the ship adder div
// reposition the ship adder and put each ships in divs that can handle both vertical and horizontal placement
// the ship status containers should react when a ship is sunk
  // this involves using the isSunk function