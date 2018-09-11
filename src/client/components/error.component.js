import React, {Component} from 'react'

class Error extends Component {

  render() {
    const {error, resetError} = this.props;

    if(!error) return null;

    return (
      <div className="alert alert-danger" role="alert">
        <strong>Oh snap!</strong> {error}

        <button type="button" className="close" onClick={resetError}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}

export default Error;