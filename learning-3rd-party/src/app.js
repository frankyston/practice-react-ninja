'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor(){
    super()
  }

  handleClick(e){
    console.log('Clicou no botão!', this.myInput);
    this.myInput.focus()
  }

  render(){
    return (
      <div>
        <input type="text" ref={(node) => this.myInput = node} />
        <button onClick={(e) => { this.handleClick(e) }}>Focus</button>
      </div>
    )
  }
}

// module.exports = Title
export default App
