'use strict'

import React, { Component } from 'react'
import Button from './button'
import Square from './square'

class App extends Component {
  constructor(){
    super()
    this.state = {
      value: "Texto inicial",
      checked: false,
      valueSelect: 1
    }
  }

  render(){
    return (
      <div>
        <form>
          <input type="text" value={this.state.value} onChange={(e) => {
            this.setState({ value: e.target.value })
          }} />
        </form>

        <hr/>

        <label>
          <input type="checkbox" checked={this.state.checked} onChange={() => {
            this.setState({ checked: !this.state.checked })
          }} />
          checkbox
        </label>

        <hr />

        <input type="radio" name="rd" value="1" defaultChecked /> Radio 1
        <input type="radio" name="rd" value="1" /> Radio 2

        <hr/>

        <select value={this.state.valueSelect} onChange={ (e) => { this.setState({ valueSelect: e.target.value }) } }>
          <option value='1'>Valor 1</option>
          <option value='2'>Valor 2</option>
          <option value='3'>Valor 3</option>
        </select>
      </div>
    )
  }
}

// module.exports = Title
export default App
