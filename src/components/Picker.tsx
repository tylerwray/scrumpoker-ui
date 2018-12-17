import React from 'react'
import { css } from 'emotion'
import classNames from 'classnames'

import { withCards } from './PokerContext'
import { withTheme, Theme } from './ThemeContext'
import { RouteComponentProps } from 'react-router-dom'

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

interface Props extends RouteComponentProps {
  theme: Theme
  numbers: number[]
  changeSelected(selected: number): void
}

function Picker({ history, theme, numbers, changeSelected }: Props) {
  const themedCard = css`
    background-color: ${theme.cardColor};
  `

  return (
    <div className={picker}>
      {numbers.map(number => (
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
      ))}
    </div>
  )
}

export default withTheme(withCards(Picker))
