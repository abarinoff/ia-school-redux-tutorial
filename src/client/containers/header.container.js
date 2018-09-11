import {connect} from 'react-redux'
import {toggleTheme} from '../actions'
import HeaderComponent from '../components/header.component'

const mapDispatchToProps = dispatch => ({
  toggleTheme: () => dispatch(toggleTheme())
});

export default connect(null, mapDispatchToProps)(HeaderComponent);