import React, {Component} from 'react';
import TodoListItem from './todo.list.item.component';

class TodoList extends Component {

  render() {
    const { todos, theme } = this.props;
    const children = todos.length > 0 ? this.renderTodoItems() : this.renderEmptyList();

    return (
      <div className="my-3 p-3 rounded box-shadow" style={{backgroundColor: theme.bgColor}}>
        <h5 className="border-bottom border-gray pb-2 mb-0" style={{color: theme.color}}>TODOs</h5>
        {children}
      </div>
    );
  }

  renderTodoItems = () => {
    const { todos, theme, removeTodo } = this.props;

    return todos.map(todo => (
      <TodoListItem
        key={todo.id}
        theme={theme}
        removeTodo={() => removeTodo(todo.id)}
        {...todo}
      />));
  };

  renderEmptyList = () => {
    const { theme } = this.props;

    return (
      <div className="text-center pt-3" style={{color: theme.color}}>
        <strong>NO ITEMS</strong>
      </div>
    );
  };
}

export default TodoList;