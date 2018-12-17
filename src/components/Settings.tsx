import React from 'react'
import { SwatchesPicker } from 'react-color'

import { withTheme, Theme } from './ThemeContext'
import BackIcon from './BackIcon'
import { css } from 'emotion'
import { RouteComponentProps } from 'react-router'

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

interface Color {
  hex: string
}

interface Props extends RouteComponentProps {
  theme: Theme
  updateTheme(theme: Theme): void
}

function Settings({ history, theme, updateTheme }: Props) {
  return (
    <>
      <BackIcon onClick={history.goBack} />
      <div className={container}>
        <SwatchesPicker
          className={picker}
          triangle="hide"
          color={theme.cardColor}
          height={500}
          onChange={(color: Color) => {
            updateTheme({ cardColor: color.hex })
          }}
        />
      </div>
    </>
  )
}

export default withTheme(Settings)
