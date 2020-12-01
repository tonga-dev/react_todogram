import React, { Component } from 'react'
import AddTodo from './components/AddTodo'
import Header from './components/layout/Header'
import Todo from './components/Todo'
import './App.css'

export class App extends Component {

	state = {
		todos: [
			{
				id: 1,
				title: 'Take out the trash',
				completed: false
			},
			{
				id: 2,
				title: 'Finish the Website and deploy it',
				completed: false
			},
			{
				id: 3,
				title: 'Perform the tests before launching a beta version',
				completed: false
			},
			{
				id: 4,
				title: 'Work on the Algorithm',
				completed: false
			}
		]
	}

	// Toggle Complete
	markComplete = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed
				}
				return todo
			})
		})
	}

	// Delete Todo
	delTodo = (id) => {
		this.setState({
			todos: [...this.state.todos.filter(todo => todo.id !== id)]
		});
	}

	// Add Todo
	addTodo = (title) => {
		const newTodo = {
			id: 5,
			title,
			completed: false
		}
		this.setState({ todos: [...this.state.todos, newTodo] });
	}

	render() {
		return (
			<div className="container">
				<Header />
				<AddTodo addTodo={this.addTodo} />
				<Todo todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
			</div>
		)
	}
}

export default App
