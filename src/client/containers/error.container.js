import {connect} from 'react-redux'
import {resetError} from '../actions'
import ErrorComponent from '../components/error.component'

const mapStateToProps = state => ({
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  resetError: () => dispatch(resetError())
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorComponent);