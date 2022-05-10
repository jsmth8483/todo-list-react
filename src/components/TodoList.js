import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
	render() {
		return (
			<div className="todo-list">
				{this.props.todos.map((todo) => {
					return (
						<Todo
							key={todo.id}
							id={todo.id}
							title={todo.title}
							completed={todo.completed}
							editable={todo.editable}
							onEdit={this.props.onEdit}
							onSave={this.props.onSave}
							onCancelEdit={this.props.onCancelEdit}
							onDelete={this.props.onDelete}
							onComplete={this.props.onComplete}
						/>
					);
				})}
			</div>
		);
	}
}

export default TodoList;
