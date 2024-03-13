
import React from 'react';

const ChildComponent = (props) => {


    const {handleClick}  = props;
  return (
    <div>
      <p> le composant enfant</p>
      <p>{props.data}</p>
        {props.children}
         <button onClick={handleClick} > click Me</button>
    </div>
  );
};

export default ChildComponent;
