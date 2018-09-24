import React from 'react'

import Card from './Card'

import './Picker.css'

function Picker({ numbers, onClick }) {
  return (
    <div id="picker">
      {numbers.map(x => (
        <Card key={x} number={x} onClick={onClick} />
      ))}
    </div>
  )
}

export default Picker
