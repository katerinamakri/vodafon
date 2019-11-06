import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from './Search.js';
import Home from './Home.js';
import Page2 from './Page2.js';

class App extends Component {

  render() {
    
    return (
      <Router>
        <div className="App">

          <header>
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/page2">Page 2</Link>
                </li>
              </ul>
              <Search />
            </div>
            <div>
              <h1>Slide 1</h1>
              <p>Text for slide 1</p>
            </div>
          </header>


          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/page2">
              <Page2 />
            </Route>
          </Switch>
        </div>
      </Router>
    );   
  }
}

export default App;
