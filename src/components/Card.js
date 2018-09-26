import React from 'react'
import { withRouter } from 'react-router-dom'
import { css } from 'emotion'

const card = css`
  color: #ffffff;
  margin: 15% auto;
  border: 2px solid #ffffff;
  border-radius: 5px;
  background-color: green;
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

function Card(props) {
  const { history, number, onClick } = props

  return (
    <div
      className={card}
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
