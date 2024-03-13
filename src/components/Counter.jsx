import React from 'react'
import { useState } from "react";

function Counter() {

    const  [compteur, setCount] = useState(0);

    const increment = () =>{
        setCount(compteur + 1)
    }
    const decrement = () =>{
        setCount(compteur - 1)
    }

  return (
    <>
      <p>{compteur}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  )
}

export default Counter
