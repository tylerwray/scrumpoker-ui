import React from 'react'

import Card from './Card/Card.jsx'

import { numbers } from '../../constants'

import './CardPicker.css'

function CardPicker() {
  return (
    <div id="picker-container">
      {numbers.map(x => (
        <Card key={x} number={x} />
      ))}
    </div>
  )
}

export default CardPicker
