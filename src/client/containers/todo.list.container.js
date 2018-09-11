import { connect } from 'react-redux'
import TodoList from '../components/todo.list.component'
import {removeTodo} from "../actions";

const mapStateToProps = state => ({
  todos: state.todos,
  theme: state.theme
});

const mapDispatchToProps = dispatch => ({
  removeTodo: id => dispatch(removeTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)