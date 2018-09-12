import { connect } from 'react-redux'
import TodoList from '../components/todo.list.component'
import {removeTodoSucceeded} from "../actions";
import Rest from '../rest';
import {setError} from "../actions/error.actions";

const mapStateToProps = state => ({
  todos: state.todos.data,
  isLoading: state.todos.loading,

  theme: state.theme
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(Rest.actions.todos.sync(
    (errorData) => errorData && dispatch(setError(errorData.error))
  )),
  removeTodo: id => dispatch(Rest.actions.todo.delete(
    {id},
    (errorData, data) => errorData ? dispatch(setError(errorData.error)) : dispatch(removeTodoSucceeded(data))
  ))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)