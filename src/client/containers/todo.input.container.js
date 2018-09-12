import {connect} from 'react-redux'
import {createTodoSucceeded} from '../actions'
import TodoInput from '../components/todo.input.component'
import Rest from '../rest';
import {setError} from "../actions/error.actions";

const mapDispatchToProps = dispatch => ({
  createTodo: text => dispatch(Rest.actions.todo.post(
    {},
    {body: JSON.stringify({text})},
    (errorData, data) => errorData ? dispatch(setError(errorData.error)) : dispatch(createTodoSucceeded(data))
  ))
});

export default connect(null, mapDispatchToProps)(TodoInput);