import reduxApi from 'redux-api';
import 'cross-fetch/polyfill';
import TodosReducer from "../reducers/todos.reducer";

const customAdapterFetch = (url, options) => fetch(url, options)
  .then(response => response.json())
  .then(data => data.error ? Promise.reject(data) : data);

const Rest = reduxApi({
  todos: {
    url: `/api/todos`,
    crud: true,
    transformer: data => data,
    options: {
      headers: {
        'Content-Type': 'application/json'
      }
    },
    reducer: TodosReducer
  },

  todo: {
    url: `/api/todos/:id`,
    crud: true,
    virtual: true,
    transformer: data => data,
    options: {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  },
}).use('fetch', customAdapterFetch);

export default Rest;