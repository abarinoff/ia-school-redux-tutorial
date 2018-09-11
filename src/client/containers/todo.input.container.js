import {connect} from 'react-redux'
import {createTodo} from '../actions'
import TodoInput from '../components/todo.input.component'

const mapDispatchToProps = dispatch => ({
  createTodo: text => dispatch(createTodo(text))
});

export default connect(null, mapDispatchToProps)(TodoInput);