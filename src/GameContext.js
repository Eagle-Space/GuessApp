import React, { useState } from 'react';

export const GameContext = React.createContext();

export function GameProvider({ children }) {
  const [settings, setSettings] = useState({
    allowedGuesses: 10,
    range: 100,
  });

  const [stats, setStats] = useState({
    correctGuesses: 0,
    totalGuesses: 0,
    gamesPlayed: 0,
  });

  return (
    <GameContext.Provider value={{ settings, setSettings, stats, setStats }}>
      {children}
    </GameContext.Provider>
  );
}
