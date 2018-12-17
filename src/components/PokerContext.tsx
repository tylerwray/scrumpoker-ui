import React, { useState, useContext, ReactNode } from 'react'

const defaultNumbers = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]

interface PokerContext {
  selected: number
  numbers: number[]
  changeSelected(number: number): void
}

const PokerContext = React.createContext<PokerContext>({
  selected: 0,
  numbers: defaultNumbers,
  changeSelected() {}
})

export function withCards(Component: any) {
  return function(props: any) {
    const context = useContext(PokerContext)

    return <Component {...props} {...context} />
  }
}

interface Props {
  children: ReactNode
}

export function Provider({ children }: Props) {
  const [selected, setSelected] = useState(0)
  const numbers = defaultNumbers

  return (
    <PokerContext.Provider
      value={{
        selected,
        numbers,
        changeSelected: setSelected
      }}
    >
      {children}
    </PokerContext.Provider>
  )
}
