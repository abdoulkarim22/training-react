// Counter.js
import React, { useState } from 'react';
import Button from '../components/button/Button';

function Counter() {
  const [compteur, setCount] = useState(0);

  const incrémentation = () => {
    setCount(compteur + 1);
  };

  const décrémentation = () => {
    setCount(compteur - 1);
  };

  return (
    <>
      <p>{compteur}</p>
      {/* Utilisation du composant Button pour les boutons d'incrémentation et de décrémentation */}
      <Button title="incrémentation" handleClick={incrémentation} />
      <Button title="décrémentation" handleClick={décrémentation} />
    </>
  );
}

export default Counter;
