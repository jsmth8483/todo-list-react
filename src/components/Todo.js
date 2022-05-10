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
		} else {
			todoTitle = <span className="todo-title">{this.props.title}</span>;
		}
		return (
			<div className="todo">
				<div className="todo-status">
					<input type="checkbox" />
					{todoTitle}
				</div>
				{this.props.editable ? (
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
				) : (
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
				)}
			</div>
		);
	}
}

export default Todo;
