import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
	getStyle = () => {
		return {
			background: '#f3f3f3',
			textDecoration: this.props.todo.completed ? 'line-through' : 'none',
			borderBottom: '1px #ccc dotted'
		}
	}

	render() {
		const { id, title } = this.props.todo
		return (
			<div className="col-sm-12" style={this.getStyle()}>
				<p className="todo-item">
					<input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
					{' '}{title}
					<button onClick={this.props.delTodo.bind( this, id)} className="add-btn">Del</button>
				</p>
			</div>
		)
	}
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
}

export default TodoItem
