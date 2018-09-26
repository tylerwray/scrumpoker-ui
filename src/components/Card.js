import React from 'react'
import classNames from 'classnames'
import { css } from 'emotion'

import { withTheme } from '../theme'

const card = css`
  color: #ffffff;
  margin: 15% auto;
  border: 2px solid #ffffff;
  border-radius: 5px;
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
  const { number, onClick, theme } = props

  const themedCard = css`
    background-color: ${theme.cardColor};
  `

  return (
    <div
      className={classNames(card, themedCard)}
      onClick={() => {
        onClick(number)
      }}
    >
      {props.number}
    </div>
  )
}

export default withTheme(Card)
