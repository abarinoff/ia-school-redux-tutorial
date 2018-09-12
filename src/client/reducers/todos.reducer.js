import {TodoActionTypes} from '../actions';

const TodosReducer = (state, action) => {
  switch (action.type) {
    case TodoActionTypes.CREATE_TODO_SUCCEEDED:
      return {...state, data: [...state.data, action.payload.todo]};

    case TodoActionTypes.REMOVE_TODO_SUCCEEDED:
      return {...state, data: state.data.filter(todo => todo._id !== action.payload.todo._id)};

    default:
      return state;
  }
};

export default TodosReducer;