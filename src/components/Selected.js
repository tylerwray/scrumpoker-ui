import React from 'react'
import classNames from 'classnames'
import { css } from 'emotion'

import { PokerContext } from './PokerContext'

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
  background-color: green;
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

const backArrow = css`
  position: absolute;
  z-index: 2;
  margin: 10px;
  padding: 3px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 200ms ease-in-out;

  @media not all and (hover: none) {
    :hover {
      background-color: #424242;
    }
  }
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
    const { history } = this.props
    const { cardRevealed } = this.state

    const selected = classNames(card, cardRevealed ? cardVisible : cardHidden)

    return (
      <React.Fragment>
        <svg
          onClick={() => {
            history.push('/')
          }}
          className={backArrow}
          width="42"
          height="42"
          fill="#fff"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
        </svg>
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

export default Selected
