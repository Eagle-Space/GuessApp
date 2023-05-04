import React, { useContext } from 'react';
import { GameContext } from './GameContext';

function Stats() {
  const { stats } = useContext(GameContext);

  return (
    <div className="container">
      <h1>Player Stats</h1>
      <div>
        <p>
          <strong>Guessed Correctly:</strong> {stats.correctGuesses}
        </p>
        <p>
          <strong>Total Guesses:</strong> {stats.totalGuesses}
        </p>
        <p>
          <strong>Games Played:</strong> {stats.gamesPlayed}
        </p>
        <p>
          <strong>Average Guesses per Game:</strong>{" "}
          {stats.gamesPlayed !== 0
            ? (stats.totalGuesses / stats.gamesPlayed).toFixed(2)
            : 0}
        </p>
      </div>
    </div>
  );  
}

export default Stats;
