import React from 'react'

function Counter() {

    const  [compteur, setCount] = useState(0);

    const incrémentation = () =>{
        setCount(compteur + 1)
    }
    const décrémentation = () =>{
        setCount(compteur - 1)
    }

  return (
    <>
      <p>{compteur}</p>
      <button onClick={incrémentation}>incrémentation</button>
      <button onClick={décrémentation}>décrémentation</button>
    </>
  )
}

export default Counter
