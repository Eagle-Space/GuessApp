import React, { useContext } from 'react';
import { GameContext } from './GameContext';

function Settings() {
  const { settings, setSettings } = useContext(GameContext);

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  return (
    <div className="container">
    <div>
      <h1>Settings</h1>
      <label>
        Number of Guesses Allowed:
        <input
          type="number"
          name="allowedGuesses"
          value={settings.allowedGuesses}
          onChange={handleChange}
        />
      </label>
      <label>
        Number Range:
        <input
          type="number"
          name="range"
          value={settings.range}
          onChange={handleChange}
        />
      </label>
    </div>
    </div>
  );
}

export default Settings;
