import React, { Component } from 'react'

export class ChildComponent extends Component {
  render() {
    return (
      <>


      <p> le composant enfant</p>
       <p>{this.props.data}</p>
        {this.props.children}
        <button onClick={this.props.handleClick}>Cliquez-moi</button>

      </>
    )
  }

  handleClick = () => {
    // Appel de la fonction handleClick passée en tant que prop
    this.props.handleClick();
  }
}

export default ChildComponent