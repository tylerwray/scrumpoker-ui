import React from 'react'

import './Card.css'

function Card(props) {
  const { number, onClick } = props

  return (
    <div className="card" onClick={() => onClick(number)}>
      {props.number}
    </div>
  )
}

export default Card
