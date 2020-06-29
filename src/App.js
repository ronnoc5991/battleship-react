import React from 'react';
import './App.css';
import EnemyBoard from './EnemyBoard';
import PlayerBoard from './PlayerBoard'

function App() {

//does the main game loop go here?
//import the modules into this component and call the functions here?

  return (
    <div className="App">
      <PlayerBoard />
      <EnemyBoard />
    </div>
  );
}

export default App;
