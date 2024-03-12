
import React from 'react';

const ChildComponent = (props) => {
  return (
    <div>
      <p> le composant enfant</p>
      <p>{props.data}</p>
    </div>
  );
};

export default ChildComponent;
