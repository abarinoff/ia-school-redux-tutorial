import React, {Component} from 'react'

import Header from '../containers/header.container';
import TodoInput from '../containers/todo.input.container';
import TodoList from '../containers/todo.list.container';

class App extends Component {

  render() {
    return (
      <div className="container">
        <Header/>
        <TodoInput/>
        <TodoList/>
      </div>
    );
  }
}

export default App;