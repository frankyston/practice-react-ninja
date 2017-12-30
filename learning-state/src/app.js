'use strict'

import React, { Component } from 'react'
import Button from './button'
import Square from './square'

class App extends Component {
  constructor(){
    super()
    this.state = {
      text: "Texto inicial",
      color: 'green'
    }
  }

  render(){
    return (
      <div>
        <div className="container" onClick={ () => { this.setState({ text: "Outro texto" }) } }>
          {this.state.text}
        </div>
        <Square color={this.state.color} />
        {['red', 'green', 'blue'].map( (color) => (
          <Button
            key={color}
            handleClick={ () => this.setState({ color }) }>
            {color}
          </Button>
        ))}
      </div>
    )
  }
}

// module.exports = Title
export default App
