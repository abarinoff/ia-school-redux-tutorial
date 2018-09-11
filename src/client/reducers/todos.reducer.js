import {TodoActionTypes} from '../actions';

const defaultState = [
  {id: '71fd4b85-7f22-4eab-b10f-06b5f0266b9d', text: 'Read \'Clean Code\' book'},
  {id: '82c52ecb-2c8f-4e59-81bb-30110a279dbc', text: 'Attend \'Redux Overview\' presentation'},
  {id: '65644580-18bf-40fb-9ca0-be781fdfd16f', text: 'Read Redux documentation'},
];

const TodosReducer = (state = defaultState, action) => {
  switch (action.type) {

    case TodoActionTypes.ADD_TODO:
      return [...state, action.payload];

    case TodoActionTypes.REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);

    default:
      return state;

  }
};

export default TodosReducer;