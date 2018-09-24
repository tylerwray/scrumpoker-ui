import React from 'react'
import { withRouter } from 'react-router-dom'

import './Card.css'

function Card(props) {
  const { history, number, onClick } = props

  return (
    <div
      className="card"
      onClick={() => {
        history.push('/ready')
        onClick(number)
      }}
    >
      {props.number}
    </div>
  )
}

export default withRouter(Card)
