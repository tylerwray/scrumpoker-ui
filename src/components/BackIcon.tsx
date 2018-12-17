import React from 'react'
import { css } from 'emotion'

const backArrow = css`
  position: fixed;
  top: 0;
  left: 0;
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

function BackIcon({ ...rest }) {
  return (
    <div {...rest}>
      <svg
        className={backArrow}
        width="42"
        height="42"
        fill="#fff"
        viewBox="0 0 24 24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
      </svg>
    </div>
  )
}

export default BackIcon
