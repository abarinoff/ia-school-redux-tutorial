import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store';
import App from './components/app.component'

import 'bootstrap/dist/css/bootstrap.min.css';
import './common.scss';
import './loader.scss';

render(<Provider store={store}><App/></Provider>, document.getElementById('root'));