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
	iterator(user, i) {
				return (
					<ul className="workList uk-margin-large-left uk-margin-large-right uk-margin-small-bottom" key={user.work[i].id}>
						<li className="uk-text-xxlarge">{user.work[i].company}</li>
						<li className="uk-text-small uk-text-uppercase uk-margin-small-bottom">{user.work[i].title}</li>
						<li className="uk-text-small uk-text-uppercase"> description : {user.work[i].workDescription}</li>
					</ul>
				);
	}
	work() {
		return this.props.users.map((user) => {
			var data = new Array();
			for(var i=0; i<user.work.length; i++) {
				data[i] = this.iterator(user, i);
			}
			return data;
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
					<div className="uk-container aboutContainer">
			      		<img className="profileImage uk-align-center uk-margin-large-top" src="../lib/uikit/tests/images/avatar.jpg" width="300px" height="300px" />
						<div className="uk-container uk-text-center">
							<div className="uk-text-large uk-margin-small-top uk-margin-small-bottom aboutBrand">ABOUT ME</div>
							<div className="uk-container uk-text-large aboutPara">
								{this.userDescription()}
							</div>
						</div>
					</div>
					<div className="uk-light uk-animation-slide-bottom workContainer">
						<div className="uk-grid">
							<div className="uk-width-small-1-2 uk-push-1-2">
								<h2 className="uk-text-uppercase uk-text-center uk-text-truncate uk-margin-small-top experienceTag">experience</h2>
							</div>
							<div className="workListContainer uk-width-small-1-2 uk-pull-1-2 uk-margin-small-top uk-padding-remove">
									{this.work()}
							</div>
						</div> 
					</div>
					<div className="projectContainer uk-animation-slide-bottom">
						<div className="uk-grid">
							<div className="uk-width-small-1-2 uk-push-1-2">
								<h2 className="uk-text-uppercase uk-text-center uk-text-truncate uk-margin-small-top experienceTag">projects</h2>
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