import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from './Search.js';
import Home from './Home.js';
import Page2 from './Page2.js';

class App extends Component {
	constructor (props) {
		super (props)

		this.state = {
			menu: [],
			sliderData: [],
			homeData: {}
		}
	}

	componentDidMount() {
		this.fetchMenu();
		this.fetchSliderData();
		this.fetchHomeData();
	}

	fetchMenu = () => {

		let apiUrl = `https://voda-react-assessment.herokuapp.com/menu`;

		fetch(apiUrl, {
			method: 'GET',
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then((response) => {
			if (response.status === 404) {
				console.log(response.statusText)
			}

			return response.json();
		})
		.then((data) => {
			this.setState({ menu: data });
			
			console.log(data)
		})
	}

	fetchSliderData = () => {

		let apiUrl = `https://voda-react-assessment.herokuapp.com/slider`;

		fetch(apiUrl, {
			method: 'GET',
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then((response) => {
			if (response.status === 404) {
				console.log(response.statusText)
			}

			return response.json();
		})
		.then((data) => {
			this.setState({ sliderData: data });
			
			console.log(data)
		})
	}

	fetchHomeData = () => {

		let apiUrl = `https://voda-react-assessment.herokuapp.com/home`;

		fetch(apiUrl, {
			method: 'GET',
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then((response) => {
			if (response.status === 404) {
				console.log(response.statusText)
			}

			return response.json();
		})
		.then((data) => {
			this.setState({ homeData: data });
			
			console.log(data)
		})
	}	





	render() {

		return (
			<Router>
				<div className="app">

					<header className="app-header">
						<div className="header-container">
							<div className="app-navigation-container">
								<nav className="app-header-navigation">
									<ul>
										{ this.state.menu.map( (item, index) => ( 
												<li key={ index }> <Link to={"/" + item.title }>{ item.title }</Link> </li>
											))
										}
									</ul>
								</nav>
								
								<Search />
							</div>
						</div>

						<div className="app-slide-info">
							<h1>Slide 1</h1>
							<p>Text for slide 1</p>
						</div>
					</header>


					<Switch>
						<Route exact path="/Home">
							<Home homeData={this.state.homeData} />
						</Route>
						<Route path="/Page%202">
							<Page2 />
						</Route>
					</Switch>
				</div>
			</Router>
		);   
	}
}

export default App;
