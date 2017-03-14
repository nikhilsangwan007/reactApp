import React from 'react';
import Title from './titles/title'
import {Link} from 'react-router';

class Header extends React.Component {

   	render() {
    	return (
	      	<div>
      			<div className="uk-grid uk-light profileBar">
	      			<div className="uk-width-1-2 uk-text-center uk-margin-small-top">
		      			<img className="profileImage uk-margin-small-top" src="../lib/uikit/tests/images/avatar.jpg" width="150px" height="150px"/>
		      		</div>
		      		<div className="uk-width-1-2 uk-margin-medium-top uk-padding-remove">
			        	<Title title={this.props.title}/>
			        </div>
	        	</div>
	      		<nav className="uk-navbar uk-text-center uk-light navBar ">
		      		<div className="uk-navbar-center">
			        	<ul className="uk-navbar-nav navbarMenuList">
			        		<li className="uk-active">
			        			<Link className="uk-text-bold" to="/">Home</Link>
			        		</li>
			        		<li className="uk-active">	
								<Link className="uk-text-bold" to="Extra">Extra</Link>
							</li>
							<li className="uk-active">	
								<Link className="uk-text-bold" to="todo-list">Todos</Link>
							</li>
						</ul>
					</div>	
				</nav>
	        </div>
      	);
   	}
}

export default Header;