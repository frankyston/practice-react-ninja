'use strict'

import React from 'react'
import Title from './title'
import Paragraph from './paragraph'
import Square from './square'
import Button from './button'
import LikeButton from './like-button'

const arr = ['red', 'blue', 'green']

const App = React.createClass({
  render: function(){
    return (
      <div>
        <Title />
        <Paragraph />
        {arr.map((color, index) => (
          <Square key={index} color={color} />
        ))}

        <Button >Text Qualquer</Button>
        <LikeButton></LikeButton>
      </div>
    )
  }
})

// module.exports = Title
export default App
