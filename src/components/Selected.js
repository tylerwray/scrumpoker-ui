import React from 'react'
import classNames from 'classnames'
import { css } from 'emotion'

import { PokerContext } from './PokerContext'
import { withTheme } from '../theme'
import BackIcon from './BackIcon'

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

class Selected extends React.Component {
  state = {
    cardRevealed: false
  }

  constructor(props) {
    super(props)

    this.flipCard = this.flipCard.bind(this)
  }

  flipCard() {
    this.setState(prevState => ({
      cardRevealed: !prevState.cardRevealed
    }))
  }

  render() {
    const { history, theme } = this.props
    const { cardRevealed } = this.state

    const themedCard = css`
      background-color: ${theme.cardColor};
    `
    const selected = classNames(
      card,
      themedCard,
      cardRevealed ? cardVisible : cardHidden
    )

    return (
      <React.Fragment>
        <BackIcon
          onClick={() => {
            history.push('/')
          }}
        />
        <div className={container}>
          <div className={selected} onClick={this.flipCard}>
            <PokerContext.Consumer>
              {({ selected }) => selected}
            </PokerContext.Consumer>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default withTheme(Selected)
