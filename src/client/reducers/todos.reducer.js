import {TodoActionTypes} from '../actions';

const defaultState = {
  isLoading: false,
  collection: []
};

const TodosReducer = (state = defaultState, action) => {
  switch (action.type) {

    case TodoActionTypes.FETCH_TODOS_STARTED:
      return {...state, isLoading: true};

    case TodoActionTypes.FETCH_TODOS_SUCCEEDED:
      return {isLoading: false, collection: action.payload.todos};

    case TodoActionTypes.FETCH_TODOS_FAILED:
      return {isLoading: false, collection: []};

    case TodoActionTypes.CREATE_TODO_SUCCEEDED:
      return {...state, collection: [...state.collection, action.payload.todo]};

    case TodoActionTypes.REMOVE_TODO_SUCCEEDED:
      return {...state, collection: state.collection.filter(todo => todo._id !== action.payload.todo._id)};

    default:
      return state;

  }
};

export default TodosReducer;