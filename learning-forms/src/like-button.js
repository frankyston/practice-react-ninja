'use strict'

import React from 'react'
import Button from './button'

const LikeButton = () => (
  <Button handleClick={ (e) =>  alert('Like Button') }>Like Button</Button>
)

export default LikeButton
