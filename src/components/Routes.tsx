import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Picker from './Picker'
import Selected from './Selected'
import Settings from './Settings'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Picker} />
      <Route exact path="/ready" component={Selected} />
      <Route exact path="/settings" component={Settings} />
    </Switch>
  )
}

export default Routes
