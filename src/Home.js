import React from 'react';
import './App.css';
import { BrowserRouter as Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Section1 from './Section1.js';
import Section2 from './Section2.js';

function Home() {

	let { path, url } = useRouteMatch();

	// console.log(this.props.homeData)
	return (
		<div className="main-container">
			<h2>Our Sections</h2>
			<div>
				<nav className="app-main-navigation">
					<ul>
						<li>
							<Link to={`${url}/section1`}>Section 1</Link>
						</li>
						<li>
							<Link to={`${url}/section2`}>Section 2</Link>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route exact path={path}>
						<Section1 />
					</Route>
					<Route path={`${path}/section2`}>
						<Section2 />
					</Route>
				</Switch>
			</div>

		</div>
	);
}

export default Home;