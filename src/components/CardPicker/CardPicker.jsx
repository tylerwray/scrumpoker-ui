import React, { Component } from 'react'

import Card from './Card/Card.jsx'

import './CardPicker.css'

const numbers = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]

class CardPicker extends Component {
  state = {
    selectedNumber: 0
  }

  constructor(props) {
    super(props)

    this.selectNumber = this.selectNumber.bind(this)
  }

  selectNumber(number) {
    this.setState({
      selectedNumber: number
    })
  }

  render() {
    return (
      <div className="container">
        <div id="selected">{this.state.selectedNumber}</div>
        <div id="card-picker">
          {numbers.map(x => (
            <Card key={x} number={x} onClick={this.selectNumber} />
          ))}
        </div>
      </div>
    )
  }
}

export default CardPicker
