import React, { Component } from 'react';

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: this.props.title,
		};

		this.handleOnChange = this.handleOnChange.bind(this);
		this.handleCancelEdit = this.handleCancelEdit.bind(this);
	}

	handleOnChange(e) {
		this.setState({
			title: e.target.value,
		});
	}

	handleCancelEdit(id) {
		this.setState({ title: this.props.title });
		this.props.onCancelEdit(id);
	}

	render() {
		let todoTitle;
		let checkbox;
		let controls;
		if (this.props.editable) {
			todoTitle = (
				<input
					className="input-todo-title"
					type="text"
					value={this.state.title}
					onChange={this.handleOnChange}
					autoFocus="true"
				/>
			);
			controls = (
				<div className="todo-controls">
					<button
						className="btn-save-todo"
						onClick={() => this.props.onSave(this.props.id, this.state.title)}
					>
						Save
					</button>
					<button
						className="btn-cancel-todo"
						onClick={() => this.handleCancelEdit(this.props.id)}
					>
						Cancel
					</button>
				</div>
			);
		} else {
			todoTitle = <span className="todo-title">{this.props.title}</span>;
			controls = (
				<div className="todo-controls">
					<button
						className="btn-edit-todo"
						onClick={() => this.props.onEdit(this.props.id)}
					>
						Edit
					</button>

					<button
						className="btn-delete-todo"
						onClick={() => this.props.onDelete(this.props.id)}
					>
						Delete
					</button>
				</div>
			);
		}

		if (this.props.completed) {
			checkbox = (
				<input
					type="checkbox"
					onClick={() => this.props.onComplete(this.props.id)}
					checked
				/>
			);
			controls = (
				<div className="todo-controls">
					<button
						className="btn-edit-todo"
						onClick={() => this.props.onEdit(this.props.id)}
						disabled
					>
						Edit
					</button>

					<button
						className="btn-delete-todo"
						onClick={() => this.props.onDelete(this.props.id)}
					>
						Delete
					</button>
				</div>
			);
			todoTitle = (
				<span className="todo-title completed">{this.props.title}</span>
			);
		} else {
			checkbox = (
				<input
					type="checkbox"
					onClick={() => this.props.onComplete(this.props.id)}
				/>
			);
		}

		return (
			<div className="todo">
				<div className="todo-status">
					{checkbox}
					{todoTitle}
				</div>
				{controls}
			</div>
		);
	}
}

export default Todo;
