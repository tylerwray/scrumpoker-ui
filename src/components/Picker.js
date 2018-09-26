import React from 'react'

import { PokerContext } from './PokerContext'
import Card from './Card'

import './Picker.css'

function Picker() {
  return (
    <PokerContext.Consumer>
      {({ numbers, changeSelected }) => (
        <div id="picker">
          {numbers.map(x => (
            <Card key={x} number={x} onClick={changeSelected} />
          ))}
        </div>
      )}
    </PokerContext.Consumer>
  )
}

export default Picker
