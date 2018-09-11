import React from 'react'
import { render } from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AppReducer from './reducers'

import App from './components/app.component'

import 'bootstrap/dist/css/bootstrap.min.css';
import './common.scss';

const store = createStore(AppReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(<Provider store={store}><App/></Provider>, document.getElementById('root'));