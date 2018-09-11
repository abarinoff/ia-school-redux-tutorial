import 'cross-fetch/polyfill';

import { setError } from './error.actions';

export const TodoActionTypes = {
  FETCH_TODOS_STARTED: '[TODO] Fetch started',
  FETCH_TODOS_SUCCEEDED: '[TODO] Fetch succeeded',
  FETCH_TODOS_FAILED: '[TODO] Fetch failed',

  CREATE_TODO_SUCCEEDED: '[TODO] Create succeeded',

  REMOVE_TODO_SUCCEEDED: '[TODO] Remove succeeded',
};

export const fetchTodosStarted = () => ({
  type: TodoActionTypes.FETCH_TODOS_STARTED,
  payload: {}
});

export const fetchTodosSucceeded = todos => ({
  type: TodoActionTypes.FETCH_TODOS_SUCCEEDED,
  payload: {todos}
});

export const fetchTodosFailed = () => ({
  type: TodoActionTypes.FETCH_TODOS_FAILED,
  payload: {}
});

export const fetchTodos = () => dispatch => {
  dispatch(fetchTodosStarted());

  return fetch('/api/todos')
    .then(response => response.json())
    .then(todos => {
      if (todos.error) {
        dispatch(fetchTodosFailed());
        dispatch(setError(todos.error));
      } else {
        dispatch(fetchTodosSucceeded(todos));
      }
    });
};

export const createTodoSucceeded = todo => ({
  type: TodoActionTypes.CREATE_TODO_SUCCEEDED,
  payload: {todo}
});

export const createTodo = text => dispatch => {
  const todo = {text};

  return fetch('/api/todos', {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(todo)
  })
    .then(response => response.json())
    .then(todo => {
      if (todo.error) {
        dispatch(setError(todo.error));
      } else {
        dispatch(createTodoSucceeded(todo));
      }
    });
};

export const removeTodoSucceeded = todo => ({
  type: TodoActionTypes.REMOVE_TODO_SUCCEEDED,
  payload: {todo}
});

export const removeTodo = id => dispatch => {
  return fetch(`/api/todos/${id}`, {method: "DELETE"})
    .then(response => response.json())
    .then(todo => {
      if (todo.error) {
        dispatch(setError(todo.error));
      } else {
        dispatch(removeTodoSucceeded(todo));
      }
    });
};