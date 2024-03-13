// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';
import Button from '../components/button/Button'

class ParentComponent extends React.Component {
  render() {

    function handleClick() {
        
    }
    







    const data = "donnée du parent";
    return (
      <div>
        <h2> le composant parent</h2>
         <ChildComponent data = {data} />

        <Button title = "Premier Bouton" />
        <Button title = "Deuxième Bouton" />
         
      </div>
    );
  }
}

export default ParentComponent;
