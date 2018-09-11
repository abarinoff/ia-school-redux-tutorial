import {connect} from 'react-redux'
import {addTodo} from '../actions'
import TodoInput from '../components/todo.input.component'

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text))
});

export default connect(null, mapDispatchToProps)(TodoInput);