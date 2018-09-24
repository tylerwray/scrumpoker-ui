import React from 'react'

import './Selected.css'

class Selected extends React.Component {
  state = {
    cardShown: false
  }

  constructor(props) {
    super(props)

    this.flipCard = this.flipCard.bind(this)
  }

  flipCard() {
    this.setState(prevState => ({
      cardShown: !prevState.cardShown
    }))
  }

  render() {
    const { history, selected } = this.props
    const { cardShown } = this.state

    return (
      <React.Fragment>
        <svg
          onClick={() => {
            history.push('/')
          }}
          id="back-arrow"
          width="42"
          height="42"
          fill="#fff"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
        </svg>
        <div id="selected-container">
          <div
            id="selected"
            className={cardShown ? 'card-shown' : 'card-hidden'}
            onClick={this.flipCard}
          >
            {selected}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Selected
