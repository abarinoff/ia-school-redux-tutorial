import { combineReducers } from 'redux';

import ThemeReducer from './theme.reducer';
import ErrorReducer from "./error.reducer";

import Rest from "../rest";

export default combineReducers({
  ...Rest.reducers,
  theme: ThemeReducer,
  error: ErrorReducer
})