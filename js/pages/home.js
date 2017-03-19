import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Home extends React.Component {

	userDescription() {
		return this.props.users.map((users) => {
			return (<p key={users.id}>{users.description}</p>);
		})
	}
	fullName() {
		return this.props.users.map((users) => {
			return (<span className="firstName" key={users.id}><span className="firstName">{users.first}</span> <strong className="lastName">{users.last}</strong></span>);
		})
	}
	designation() {
		return this.props.users.map((users) => {
			return (<span key={users.id} className="postClass">{users.designation}</span>);
		})
	}
	subtagLine() {
		return this.props.users.map((users) => {
			return (<span key={users.id} className="subtagLine">{users.subtagLine}</span>);
		})
	}
	tagLine() {
		return this.props.users.map((users) => {
			return (<span key={users.id} className="tagLine">{users.tagLine}</span>);
		})
	}

	render() {
		return (
			<div>
      			<div className="uk-light profileBar">
	      			<h2 className="uk-animation-slide-top uk-margin-large-left uk-text-uppercase profileName">
	      				{this.fullName()}
	      			</h2>
			        <div className="uk-container uk-padding-remove uk-margin-large-left infoBox">
			        	<h1 className="uk-text-uppercase uk-margin-medium uk-text-bold uk-animation-slide-bottom">
			        		{this.designation()}
			        	</h1>
			        	<p className="uk-text-uppercase uk-margin-medium uk-animation-slide-bottom subtagLine">
			        		{this.subtagLine()}
			        	</p>
			        	<p className="uk-text-uppercase uk-margin-medium uk-animation-slide-bottom tagLine">
			        		{this.tagLine()}
			        	</p>
			        </div>
	        	</div>
				<section className="uk-animation-slide-bottom">
					<div className="uk-container">
			      		<img className="profileImage uk-align-center uk-margin-large-top" src="../lib/uikit/tests/images/avatar.jpg" width="300px" height="300px" />
						<div className="uk-container aboutContainer uk-text-center">
							<div className="uk-text-large uk-margin-small-top uk-margin-small-bottom aboutBrand">ABOUT ME</div>
							<div className="uk-container uk-text-large aboutPara">
								{this.userDescription()}
							</div>
						</div>
					</div>
					<div className="uk-light uk-animation-slide-bottom workContainer">
							<div className="uk-grid data-uk-grid-collapse">
								<div className="uk-width-1-4 uk-grid-small-1-4">
									<h2 className="uk-text-uppercase uk-text-center uk-margin-large-top experienceTag">experience</h2>
								</div>
								<div className="uk-width-3-4 uk-grid-small-1-4 uk-margin-large-top uk-padding-remove">
									<ol className="workList uk-margin-large-right">
										<li>instaRefr.com</li>
									</ol>
								</div>
							</div> 
					</div>
				</section>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		users: state.users
	};
}

export default connect(mapStateToProps)(Home);