import React from 'react'
import { css } from 'emotion'
import classNames from 'classnames'

import { PokerContext } from './PokerContext'
import { withTheme } from '../theme'

const picker = css`
  display: grid;
  grid-template-columns: auto auto auto auto;
`

const card = css`
  color: #ffffff;
  margin: 15% auto;
  border: 2px solid #ffffff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 2.25em;
  height: 3em;
  text-align: center;
  font-size: 36px;

  @media not all and (hover: none) {
    :hover {
      cursor: pointer;
    }
  }
`

function Picker({ history, theme }) {
  const themedCard = css`
    background-color: ${theme.cardColor};
  `

  return (
    <div className={picker}>
      <PokerContext.Consumer>
        {({ numbers, changeSelected }) =>
          numbers.map(number => (
            <div
              key={number}
              className={classNames(card, themedCard)}
              onClick={() => {
                history.push('/ready')
                changeSelected(number)
              }}
            >
              {number}
            </div>
          ))
        }
      </PokerContext.Consumer>
    </div>
  )
}

export default withTheme(Picker)
