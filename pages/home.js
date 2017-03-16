import React from 'react';

export default class Home extends React.Component {
	render() {
		return (
			<div>
      			<div className="uk-light profileBar">
	      			<h2 className="uk-animation-slide-top uk-margin-large-left uk-text-uppercase profileName"><span className="firstName">Nikhil</span><strong className="lastName">Sangwan</strong></h2>
			        <div className="uk-container uk-padding-remove uk-margin-large-left infoBox">
			        	<h1 className="uk-text-uppercase uk-margin-medium uk-text-bold uk-animation-slide-bottom postClass">front end engineer</h1>
			        	<p className="uk-text-uppercase uk-margin-medium uk-animation-slide-bottom subtagLine">once upon a time, html falls in love with css</p>
			        	<p className="uk-text-uppercase uk-margin-medium uk-animation-slide-bottom tagLine">available for all type of frontend job oppurtunities</p>
			        </div>
	        	</div>
				<section className="uk-animation-slide-bottom">
					<div className="uk-container">
			      		<img className="profileImage uk-align-center uk-margin-large-top" src="../lib/uikit/tests/images/avatar.jpg" width="300px" height="300px" />
						<div className="uk-container aboutContainer uk-text-center">
							<div className="uk-text-large uk-margin-small-top uk-margin-small-bottom aboutBrand">ABOUT ME</div>
							<div className="uk-container uk-text-large aboutPara">
								Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

									The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham
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