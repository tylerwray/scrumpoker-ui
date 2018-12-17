import React, { ReactNode } from 'react'
import { render as rtlrender, cleanup, fireEvent } from 'react-testing-library'

import Picker from '../Picker'
import { Provider } from '../PokerContext'
import { Provider as ThemeProvider } from '../ThemeContext'
import { history } from '../../config'

afterEach(cleanup)

function render(component: ReactNode) {
  return rtlrender(
    <Provider>
      <ThemeProvider>{component}</ThemeProvider>
    </Provider>
  )
}

describe('Card Selection', () => {
  it('should render a card for each number', () => {
    const { getByText } = render(<Picker />)
    ;[0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144].forEach(n => {
      expect(getByText(n.toString())).toBeTruthy()
    })
  })

  it('should navigate to the /ready page when a card is clicked', () => {
    const { getByText } = render(<Picker history={history} />)

    fireEvent.click(getByText('144'))

    expect(history.location.pathname).toBe('/ready')
  })
})
