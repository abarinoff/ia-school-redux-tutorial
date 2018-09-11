import uuidv4 from 'uuid/v4';

export const TodoActionTypes = {
  ADD_TODO: '[TODO] Add',
  REMOVE_TODO: '[TODO] Remove'
};

export const addTodo = text => ({
  type: TodoActionTypes.ADD_TODO,
  payload: {id: uuidv4(), text}
});

export const removeTodo = id => ({
  type: TodoActionTypes.REMOVE_TODO,
  payload: {id}
});