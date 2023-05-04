import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { GameProvider } from './GameContext';
import Game from './Game';
import Settings from './Settings';
import Stats from './Stats';
import './App.css';


function App() {
  return (
    <GameProvider>
      <nav>
        <Link to="/">Game</Link> | <Link to="/settings">Settings</Link> | <Link to="/stats">Stats</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </GameProvider>
  );
}

export default App;
