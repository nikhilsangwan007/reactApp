import React from 'react';


import Header from './components/header';
import Footer from './components/footer';


class App extends React.Component {

	constructor() {
		super();
		this.state={
			title:"Nikhil Sangwan",
		};
	}

	render() {
		return (
			<div>
				<Header title={this.state.title}/>
				{this.props.children}
				<Footer />
			</div>
	);
	}
}

export default App;