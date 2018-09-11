import { connect } from 'react-redux'
import TodoList from '../components/todo.list.component'
import {fetchTodos, removeTodo} from "../actions";

const mapStateToProps = state => ({
  todos: state.todos.collection,
  isLoading: state.todos.isLoading,

  theme: state.theme
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(fetchTodos()),
  removeTodo: id => dispatch(removeTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)