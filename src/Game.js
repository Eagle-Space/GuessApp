import React, { useState, useContext } from 'react';
import { GameContext } from './GameContext';

function Game() {
  const { settings, stats, setStats } = useContext(GameContext);
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * settings.range) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [guessCount, setGuessCount] = useState(0);
  const [remainingGuesses, setRemainingGuesses] = useState(settings.allowedGuesses);
  const [previousGuesses, setPreviousGuesses] = useState([]);

  const handleChange = (e) => {
    setGuess(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guessCount < settings.allowedGuesses) {
      setGuessCount(guessCount + 1);
      setRemainingGuesses(remainingGuesses - 1);
      setStats({ ...stats, totalGuesses: stats.totalGuesses + 1 });
      if (guess < randomNumber) {
        setMessage("Too Low");
        setPreviousGuesses([...previousGuesses, guess]);
      } else if (guess > randomNumber) {
        setMessage("Too High");
        setPreviousGuesses([...previousGuesses, guess]);
      } else {
        setMessage("Correct Guess");
        setStats({ ...stats, correctGuesses: stats.correctGuesses + 1, gamesPlayed: stats.gamesPlayed + 1 });
        setRandomNumber(Math.floor(Math.random() * settings.range) + 1);
        setGuessCount(0);
        setRemainingGuesses(settings.allowedGuesses);
        setPreviousGuesses([]);
      }
    } else {
      setMessage("You've reached the maximum number of guesses");
      setStats({ ...stats, gamesPlayed: stats.gamesPlayed + 1 });
      setRandomNumber(Math.floor(Math.random() * settings.range) + 1);
      setGuessCount(0);
      setRemainingGuesses(settings.allowedGuesses);
      setPreviousGuesses([]);
    }
  };

  const handleNewGame = () => {
    setRandomNumber(Math.floor(Math.random() * settings.range) + 1);
    setGuessCount(0);
    setMessage("");
    setRemainingGuesses(settings.allowedGuesses);
    setPreviousGuesses([]);
  };

  return (
    <div className="container">
      <h1>Guess the Number</h1>
      <p>Guess a number between 1 and {settings.range}</p>
      <p>Current Guesses: {guessCount}</p>
      <p>Remaining Guesses: {remainingGuesses}</p>
      <form onSubmit={handleSubmit}>
        <input type="number" value={guess} onChange={handleChange} />
        <button type="submit">Guess</button>
      </form>
      <p>{message}</p>
      <div>
        <h2>Previous Guesses</h2>
        <ul>
          {previousGuesses.map((prevGuess, index) => (
            <li key={index}>{prevGuess}</li>
          ))}
        </ul>
      </div>
      <button onClick={handleNewGame}>New Game</button>
    </div>
  );
}

export default Game;
