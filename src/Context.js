import React, { useState, useContext, createContext } from 'react';

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
  const [isDark, setDark] = useState(false);

  console.log('theme', theme);
  return (
    <div
      style={{
        // width: 200,
        background: theme.background,
        color: theme.foreground,
      }}
    >
      <h5>Theme</h5>
      <button
        onClick={() => {
          // setTheme('light');
        }}
      >
        Light
      </button>
      <button
        onClick={() => {
          // setTheme('dark');
        }}
      >
        Dark
      </button>
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
  // const [theme, setTheme] = useState('light');
  return (
    <themeContext.Provider value={themes.light}>
      <div style={{ background: themes.background, color: themes.color }}>
        <h1>Niveau 1</h1>
        <LevelTwo />
      </div>
    </themeContext.Provider>
  );
};

export default ContextComponent;
