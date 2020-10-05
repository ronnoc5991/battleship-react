import React from 'react';
import './App.css';
import Game from './Game';
import { GameProvider } from './GameContext';
import IntroAnimation from './IntroAnimation';

function App() {

  return (
    <GameProvider>
      <div className="App" >
        <IntroAnimation />
        <Game />
      </div>
    </GameProvider>
  );
}

export default App;