import React, { useContext, useState, useEffect, ReactNode } from 'react'

export interface Theme {
  cardColor: string
}

interface ThemeContext {
  theme: Theme
  updateTheme(theme: Theme): void
}

export const defaultCardColor = '#0097a7'

export const ThemeContext = React.createContext<ThemeContext>({
  theme: {
    cardColor: defaultCardColor
  },
  updateTheme() {}
})

const CARD_COLOR_KEY = 'card-color-837'

export function getCardColor(): string {
  const color = localStorage.getItem(CARD_COLOR_KEY)

  return color || defaultCardColor
}

export function setCardColor(color: string) {
  try {
    localStorage.setItem(CARD_COLOR_KEY, color)
  } catch (err) {
    // Do Nothing
  }
}

export function withTheme(Component: any) {
  return function ThemedComponent(props: any) {
    const context = useContext(ThemeContext)

    return <Component {...props} {...context} />
  }
}

interface Props {
  children: ReactNode
}

export function Provider({ children }: Props) {
  const [theme, setTheme] = useState({
    cardColor: getCardColor()
  })

  useEffect(
    () => {
      setCardColor(theme.cardColor)
    },
    [theme.cardColor]
  )

  function updateTheme(newTheme: Theme) {
    setTheme({
      ...theme,
      ...newTheme
    })
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        updateTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
