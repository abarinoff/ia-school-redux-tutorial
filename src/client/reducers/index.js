import { combineReducers } from 'redux';

import TodosReducer from './todos.reducer';
import ThemeReducer from './theme.reducer';

export default combineReducers({
  todos: TodosReducer,
  theme: ThemeReducer
})