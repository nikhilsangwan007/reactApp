import React from 'react';

class Title extends React.Component {
   render() {
      return (
      	<div>
	        <h2 className="">{this.props.title}</h2>
        </div>
      );
   }
}

export default Title;