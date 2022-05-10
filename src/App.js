import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import './App.css';
import TodoList from './components/TodoList';
import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
		};

		this.handleAddTodo = this.handleAddTodo.bind(this);
		this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
		this.handleEditTodo = this.handleEditTodo.bind(this);
		this.handleSaveTodo = this.handleSaveTodo.bind(this);
		this.handleCancelEditTodo = this.handleCancelEditTodo.bind(this);
	}

	componentDidMount() {
		const todos = [
			{
				id: uuid(),
				title: 'thing1',
				completed: false,
				editable: false,
			},
			{
				id: uuid(),
				title: 'thing2',
				completed: false,
				editable: false,
			},
			{
				id: uuid(),
				title: 'thing3',
				completed: false,
				editable: false,
			},
		];
		this.setState({
			todos: todos,
		});
	}

	handleAddTodo(todoTitle) {
		const newTodo = {
			id: uuid(),
			title: todoTitle,
			completed: false,
			editable: false,
		};
		this.setState({
			todos: [...this.state.todos, newTodo],
		});
	}

	handleEditTodo(todoId) {
		const todoIndexToEdit = this.state.todos.findIndex(
			(todo) => todo.id === todoId
		);
		const todos = [...this.state.todos];
		const todo = { ...todos[todoIndexToEdit] };
		console.log(todo);
		todo.editable = true;
		todos[todoIndexToEdit] = todo;
		this.setState({
			todos: todos,
		});
	}

	handleSaveTodo(todoId, todoTitle) {
		const todoIndexToEdit = this.state.todos.findIndex(
			(todo) => todo.id === todoId
		);
		const todos = [...this.state.todos];
		const todo = { ...todos[todoIndexToEdit] };
		todo.title = todoTitle;
		todo.editable = false;
		todos[todoIndexToEdit] = todo;
		this.setState({
			todos: todos,
		});
	}

	handleCancelEditTodo(todoId) {
		const todoIndexToEdit = this.state.todos.findIndex(
			(todo) => todo.id === todoId
		);
		const todos = [...this.state.todos];
		const todo = { ...todos[todoIndexToEdit] };
		console.log(todo);
		todo.editable = false;
		todos[todoIndexToEdit] = todo;
		this.setState({
			todos: todos,
		});
	}

	handleDeleteTodo(todoId) {
		const todoIndexToDelete = this.state.todos.findIndex(
			(todo) => todo.id === todoId
		);
		const todos = this.state.todos.slice();
		todos.splice(todoIndexToDelete, 1);
		this.setState({
			todos: todos,
		});
	}

	render() {
		return (
			<div className="App">
				<Header />
				<AddTodo onAddTodo={this.handleAddTodo} />
				<TodoList
					todos={this.state.todos}
					onEdit={this.handleEditTodo}
					onSave={this.handleSaveTodo}
					onCancelEdit={this.handleCancelEditTodo}
					onDelete={this.handleDeleteTodo}
				/>
			</div>
		);
	}
}

export default App;
