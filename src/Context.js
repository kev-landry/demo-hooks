import React, { useState, useContext, createContext } from 'react';
import './styles.css';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

const themeContext = createContext(themes.light);

const LevelFive = () => {
  const theme = useContext(themeContext);

  console.log('theme', theme);
  return (
    <div
      style={{
        background: theme.background,
        color: theme.foreground,
      }}
    >
      <h5>Niveau 5 Theme</h5>
    </div>
  );
};

const LevelFour = () => (
  <div>
    <h4>Niveau 4</h4>
    <LevelFive />
  </div>
);

const LevelThree = () => (
  <div>
    <h3>Niveau 3</h3>
    <LevelFour />
  </div>
);

const LevelTwo = () => (
  <div>
    <h2>Niveau 2</h2>
    <LevelThree />
  </div>
);

const ContextComponent = () => {
  const [isDark, setDark] = useState(false);

  return (
    <themeContext.Provider value={isDark ? themes.dark : themes.light}>
      <div style={{ background: themes.background, color: themes.color }}>
        <h3>Changer de theme: {isDark ? 'dark' : 'light'}</h3>
        <input type="checkbox" id="toggle" onClick={() => setDark(!isDark)} />
        <div>
          <label for="toggle"></label>
        </div>
        <h1>Exemple Contexte</h1>
        <h1>Niveau 1</h1>
        <LevelTwo />
      </div>
    </themeContext.Provider>
  );
};

export default ContextComponent;
