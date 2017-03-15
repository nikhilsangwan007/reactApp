import React from 'react';
import {EventEmitter} from 'events';

import * as todoActions from '../actions/todoActions';
import TodoStore from '../stores/todostore';

export default class Todo extends React.Component {
	constructor(props) {
		super()
	}

	deleteTodoItem() {
		const id = this.props.id;
		todoActions.deleteTodo(id);
	}

	render() {
		const { id, task, complete} = this.props;

		return(
				<li className="uk-margin-small">
					<input type="checkbox" className="uk-checkbox" onChange={this.deleteTodoItem.bind(this)}/>
					<span>	{task}</span>
				</li>
			);
	}
}