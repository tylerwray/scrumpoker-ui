import React from 'react'
import { css } from 'emotion'
import { withRouter } from 'react-router-dom'

import SettingsIcon from './SettingsIcon'

const fab = css`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;

  @media not all and (hover: none) {
    :hover {
      background-color: #424242;
    }
  }
`

function Layout({ children, history }) {
  return (
    <React.Fragment>
      {children}
      <SettingsIcon
        className={fab}
        onClick={() => {
          history.push('/settings')
        }}
      />
    </React.Fragment>
  )
}

export default withRouter(Layout)
