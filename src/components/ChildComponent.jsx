
import React from 'react';

const ChildComponent = (props) => {
  return (
    <div>
      <p> le composant enfant</p>
      <p>{props.data}</p>
        {props.children}
         
    </div>
  );
};

export default ChildComponent;
