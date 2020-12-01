import React, { Component } from 'react'

export class AddTodo extends Component {

	state = {
		title: ''
	}

	onChange = (e) => {
		this.setState({ title: e.target.value })
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state.title)
		this.setState({ title: ' ' })
	}
	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit} className="input-group input-group-sm form">
					<input
						type="text"
						name="title"
						className="form-control"
						placeholder="Add ToDo ..."
						value={this.state.title}
						onChange={this.onChange}
					/>
					<span className="input-group-btn">
						<button className="btn btn-default">
							Add
						</button>
					</span>
				</form>
			</div>

		)
	}
}

export default AddTodo
