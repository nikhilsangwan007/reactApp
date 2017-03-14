import React from 'react';

export default class Todo extends React.Component {
	constructor(props) {
		super()
	}

	render() {
		const { id, task, complete} = this.props;

		return(
				<li>
					<input type="checkbox" className="uk-checkbox"/>
					<span>	{task}</span>
				</li>
			);
	}
}