import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component {

   	render() {
    	return (
	      	<div className="navContainer">	      	
	      		<nav className="uk-navbar uk-text-center uk-light navBar ">
		      		<div className="uk-navbar-center">
			        	<ul className="uk-navbar-nav uk-text-large navbarMenuList">
			        		<li className="uk-active">
			        			<Link className="uk-text-bold" to="/">Home</Link>
			        		</li>
			        		<li className="uk-active">	
								<Link className="uk-text-bold" to="Extra">Extra</Link>
							</li>
						</ul>
					</div>	
				</nav>
	        </div>
      	);
   	}
}

export default Header;