import React from 'react'
import { SwatchesPicker } from 'react-color'

import { withTheme } from '../theme'
import BackIcon from './BackIcon'
import { css } from 'emotion'

const container = css`
  display: flex;
  justify-content: center;
`

const picker = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 15% auto;
`

function Settings({ history, theme, updateTheme }) {
  return (
    <React.Fragment>
      <BackIcon
        onClick={() => {
          history.goBack()
        }}
      />
      <div className={container}>
        <SwatchesPicker
          className={picker}
          triangle="hide"
          color={theme.cardColor}
          height={500}
          onChange={color => {
            updateTheme({ cardColor: color.hex })
          }}
        />
      </div>
    </React.Fragment>
  )
}

export default withTheme(Settings)
