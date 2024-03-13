// ParentComponent.js
import React from 'react';
import Button from '../components/button/Button';
import Counter from './Counter';

function ParentComponent() {
  return (
    <div>
      <h2>Parent Component</h2>
      <Counter />
    </div>
  );
}

export default ParentComponent;
