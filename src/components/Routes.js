import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CardPicker from './containers/CardPicker'
import Selected from './containers/Selected'

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
