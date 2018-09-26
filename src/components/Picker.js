import React from 'react'

import { PokerContext } from './PokerContext'
import Card from './Card'
import { css } from 'emotion'

const picker = css`
  display: grid;
  grid-template-columns: auto auto auto;
`

function Picker() {
  return (
    <PokerContext.Consumer>
      {({ numbers, changeSelected }) => (
        <div className={picker}>
          {numbers.map(x => (
            <Card key={x} number={x} onClick={changeSelected} />
          ))}
        </div>
      )}
    </PokerContext.Consumer>
  )
}

export default Picker
