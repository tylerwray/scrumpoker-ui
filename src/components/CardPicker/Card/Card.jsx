import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import './Card.css'
import { changeNumber } from '../../../state/actions'

function Card(props) {
  const { number, history, onClick } = props

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

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: number => {
      dispatch(changeNumber(number))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Card))
