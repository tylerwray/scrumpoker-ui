import React, { useEffect } from 'react'
import { Router } from 'react-router-dom'

import Routes from './components/Routes'
import Layout from './components/Layout'
import { Provider } from './components/PokerContext'
import { Provider as ThemeProvider } from './components/ThemeContext'
import { pageView } from './tracker'
import { history } from './config'

function App() {
  useEffect(() => {
    // Track first page view
    pageView(history.location.pathname)

    // Track subsequent page views
    const unsubscribe = history.listen(({ pathname }) => pageView(pathname))

    return unsubscribe
  }, [])

  return (
    <Provider>
      <ThemeProvider>
        <Router history={history}>
          <Layout>
            <Routes />
          </Layout>
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

export default App
