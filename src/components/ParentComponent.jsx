// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component {
  render() {
    const data = "donnée du parent";
    return (
      <div>
        <h2> le composant parent</h2>
         <ChildComponent data = {data} />
      </div>
    );
  }
}

export default ParentComponent;
