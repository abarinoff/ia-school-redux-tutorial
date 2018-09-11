import React, {Component} from 'react'

class TodoInput extends Component {

  constructor(props) {
    super(props);
    this.input = '';
  }

  render() {
    return (
      <form className="my-2 my-lg-0" onSubmit={this.onFormSubmitted}>
        <input className="form-control mr-sm-2" type="text" ref={node => this.input = node}/>
      </form>
    )
  }

  onFormSubmitted = (event) => {
    const {createTodo} = this.props;

    event.preventDefault();

    if (this.input.value.trim().length > 0) {
      createTodo(this.input.value);
      this.input.value = ''
    }
  };
}

export default TodoInput;