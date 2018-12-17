import React, { useState } from 'react'
import classNames from 'classnames'
import { css } from 'emotion'

import { withCards } from './PokerContext'
import { withTheme, Theme } from './ThemeContext'
import BackIcon from './BackIcon'
import { RouteComponentProps } from 'react-router'

const container = css`
  display: flex;
  justify-content: center;
  perspective: 1000px;
`

const card = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 20% auto;
  font-size: 144px;
  text-align: center;
  color: #ffffff;
  border: 4px solid #ffffff;
  border-radius: 8px;
  width: 2.25em;
  height: 3em;
  cursor: pointer;
  transform-style: preserve-3d;
`

const cardVisible = css`
  transition: transform 500ms, color 150ms 200ms ease-in-out;
`

const cardHidden = css`
  transition: transform 500ms, color 0ms;
  transform: rotateY(180deg);
  color: transparent;
`

interface Props extends RouteComponentProps {
  theme: Theme
  selected: number
}

function Selected({ history, theme, selected }: Props) {
  const [cardRevealed, setCardRevealed] = useState(false)

  function flipCard() {
    setCardRevealed(!cardRevealed)
  }

  const themedCard = css`
    background-color: ${theme.cardColor};
  `
  const selectedClassNames = classNames(
    card,
    themedCard,
    cardRevealed ? cardVisible : cardHidden
  )

  return (
    <>
      <BackIcon
        onClick={() => {
          history.push('/')
        }}
      />
      <div className={container}>
        <div className={selectedClassNames} onClick={flipCard}>
          {selected}
        </div>
      </div>
    </>
  )
}

export default withTheme(withCards(Selected))
