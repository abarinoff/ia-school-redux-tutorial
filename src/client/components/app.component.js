import React, {Component} from 'react'

import Header from '../containers/header.container';
import Error from '../containers/error.container';
import TodoInput from '../containers/todo.input.container';
import TodoList from '../containers/todo.list.container';

class App extends Component {

  render() {
    return (
      <div className="container">
        <Header/>
        <Error/>
        <TodoInput/>
        <TodoList/>
      </div>
    );
  }
}

export default App;