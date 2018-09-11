import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';

import AppReducer from '../reducers'

export default createStore(AppReducer, composeWithDevTools(applyMiddleware(thunk)));