import React, {Component} from 'react';

class TodoListItem extends Component {

  render() {
    const { removeTodo, theme, text } = this.props;

    return (
      <div className="media pt-3" style={{color: theme.color}}>
        <p className="media-body pb-3 mb-0 lh-125 border-bottom border-gray">
          <strong className="d-inline-block">@ {text}</strong>
          <button type="button" className="close d-inline-block" style={{color: theme.color}} onClick={removeTodo}>
            <span aria-hidden="true">&times;</span>
          </button>
        </p>
      </div>
    );
  }
}

export default TodoListItem;