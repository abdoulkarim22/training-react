
import React, { useState } from 'react';
import Button from '../components/button/Button';

function Counter() {
  const [compteur, setCount] = useState(0);

  const increment = () => {
    setCount(compteur + 1);
  };

  const decrement = () => {
    setCount(compteur - 1);
  };

  return (
    <>
      <p>{compteur}</p>
    
      <Button title="increment" handleClick={increment} />
      <Button title="decrement" handleClick={decrement} />
    </>
  );
}

export default Counter;
