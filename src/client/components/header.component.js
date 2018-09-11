import React, {Component} from 'react'

class Header extends Component {

  render() {
    const {toggleTheme} = this.props;

    return (
      <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded box-shadow">
        <div className="lh-100">
          <h6 className="mb-0 text-white lh-100 d-inline-block">Redux Tutorial for IA School</h6>
        </div>

        <button type="button" className="btn btn-light d-inline-block ml-auto" onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>
    );
  }
}

export default Header;