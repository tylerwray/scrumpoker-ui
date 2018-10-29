import React, { useContext } from 'react'

export const defaultCardColor = '#0097a7'

export const ThemeContext = React.createContext()

export function withTheme(Component) {
  return function ThemedComponent(props) {
    const { theme, updateTheme } = useContext(ThemeContext)

    return <Component {...props} theme={theme} updateTheme={updateTheme} />
  }
}
