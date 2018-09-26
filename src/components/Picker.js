import React from 'react'

import { PokerContext } from './PokerContext'
import Card from './Card'
import { css } from 'emotion'

const picker = css`
  display: grid;
  grid-template-columns: auto auto auto auto;
`

function Picker({ history }) {
  return (
    <React.Fragment>
      <PokerContext.Consumer>
        {({ numbers, changeSelected }) => (
          <div className={picker}>
            {numbers.map(x => (
              <Card
                key={x}
                number={x}
                onClick={selected => {
                  history.push('/ready')
                  changeSelected(selected)
                }}
              />
            ))}
          </div>
        )}
      </PokerContext.Consumer>
    </React.Fragment>
  )
}

export default Picker
