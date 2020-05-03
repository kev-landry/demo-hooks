import React, { useState } from 'react';

const StateComponent = () => {
  const [isBadassColor, setIsBadassColor] = useState(true);
  console.log(isBadassColor);
  return (
    <h1
      onClick={() => setIsBadassColor(!isBadassColor)}
      style={{ color: isBadassColor ? '#BADA55' : '#EB01A5' }}
    >
      Exemple du hook useState : {String(isBadassColor)}
    </h1>
  );
};

export default StateComponent;
