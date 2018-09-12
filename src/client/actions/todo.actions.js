export const TodoActionTypes = {
  CREATE_TODO_SUCCEEDED: '[TODO] Create succeeded',
  REMOVE_TODO_SUCCEEDED: '[TODO] Remove succeeded',
};

export const createTodoSucceeded = todo => ({
  type: TodoActionTypes.CREATE_TODO_SUCCEEDED,
  payload: {todo}
});

export const removeTodoSucceeded = todo => ({
  type: TodoActionTypes.REMOVE_TODO_SUCCEEDED,
  payload: {todo}
});