import React from 'react'
import { connect } from 'react-redux'

import './Selected.css'

function Selected(props) {
  const { number, history } = props

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
        <div id="selected">{number}</div>
      </div>
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  console.log(state)

  return {
    number: state
  }
}

export default connect(mapStateToProps)(Selected)
