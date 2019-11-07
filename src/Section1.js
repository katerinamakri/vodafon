import React, { Component } from 'react';
import './App.css';

class Section1 extends Component {

	render() {
		console.log('It run')
		console.log(this.props.data)
		return (
			<div>
				Section1
			</div>
		);
	}
}

export default Section1;