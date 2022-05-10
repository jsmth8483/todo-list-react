import React, { Component } from 'react';

class AddTodo extends Component {
	state = {
		text: '',
		placeholder: '',
		error: false,
	};

	handleTextChange(e) {
		this.setState({
			text: e.target.value,
		});
	}

	handleAddTodo(e) {
		e.preventDefault();
		if (this.state.text.trim() !== '') {
			this.props.onAddTodo(this.state.text.trim());
			this.setState({ text: '', error: false });
		} else {
			this.setState({ error: true });
		}
	}

	componentDidMount() {
		const getPlaceholder = () => {
			const placeholders = [
				"What's on your mind...",
				'Jot it down...',
				'A task a day...',
			];

			return placeholders[Math.floor(Math.random() * placeholders.length)];
		};
		this.setState({ placeholder: getPlaceholder() });
	}

	render() {
		return (
			<div className="todo-input-div">
				<form className="add-todo">
					<input
						className="todo-input"
						type="text"
						placeholder={this.state.placeholder}
						value={this.state.text}
						onChange={this.handleTextChange.bind(this)}
					/>
					<button
						className="btn-add-todo"
						type="submit"
						onClick={this.handleAddTodo.bind(this)}
					>
						Add Task
					</button>
				</form>
				{this.state.error ? (
					<div className="add-todo-error">Please enter a valid title.</div>
				) : null}
			</div>
		);
	}
}

export default AddTodo;
