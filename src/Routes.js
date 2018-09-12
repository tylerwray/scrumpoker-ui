import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { CardPicker, Selected } from './components'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={CardPicker} />
      <Route exact path="/ready" component={Selected} />
      {/* <Route component={NotFound} /> */}
    </Switch>
  )
}

export default Routes
