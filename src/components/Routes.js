import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Picker from './Picker'
import Selected from './Selected'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Picker} />
      <Route exact path="/ready" component={Selected} />
    </Switch>
  )
}

export default Routes
