import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Section1 from './Section1.js';
import Section2 from './Section2.js';

class Home extends Component {

	render() {
		return (
			<div>
				<h2>Our Sections</h2>
				<nav>
					<ul>
						<li>
							<Link to="/section1">Section 1</Link>
						</li>
						<li>
							<Link to="/section2">Section 2</Link>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route exact path="/section1">
						<Section1 />
					</Route>
					<Route path="/section2">
						<Section2 />
					</Route>
				</Switch>
			</div>
		);
	}
}

export default Home;