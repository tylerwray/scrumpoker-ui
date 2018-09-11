import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import { CardPicker } from './components'

import './index.css'

ReactDOM.render(<CardPicker />, document.getElementById('root'))
registerServiceWorker()
