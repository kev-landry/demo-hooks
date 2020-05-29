/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';

// Permet d'exécuter différent effets dans le cycle de vie du composant
const EffectComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  }, []);
  return <h1>Exemple useEffect :{time.toLocaleTimeString()}</h1>;
};

export default EffectComponent;
