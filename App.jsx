import React from 'react';
import {Link} from 'react-router';

import Header from './components/header';
import Footer from './components/footer';


class App extends React.Component {

	constructor() {
		super();
		this.state={
			title:"Welcome to reactJs",
		};
	}

	changeTitle(title) {
		this.setState({title});
	}

	render() {
		return (
			<div>
				<Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
				<Link to="/">Home</Link>
				<Link to="Extra">Extra</Link>
				{this.props.children}
				<Footer />
			</div>
	);
	}
}

export default App;