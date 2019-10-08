import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as firebase from 'firebase';

import CreateHS from "./components/create-homestation.component";
import Weathermap from "./components/weathermap.component";
import Student from "./components/create-student-firebase.component";

import logo from "./logo.svg";

class App extends Component {
  // <li className="navbar-item">
  //   <Link to="/" className="nav-link">Todos</Link>
  // </li>
  // <li className="navbar-item">
  //   <Link to="/create" className="nav-link">Create Todo</Link>
  // </li>
  // <li className="navbar-item">
  //   <Link to="/createHSFirebase" className="nav-link">Create HSF</Link>
  // </li>
  // <li className="navbar-item">
  //   <Link to="/googlemap" className="nav-link">Googlemap</Link>
  // </li>
  // <li className="navbar-item">
  //   <Link to="/create-station" className="nav-link">Create HS</Link>
  // </li>
  // <li className="navbar-item">
  //   <Link to="/weathermap" className="nav-link">Weathermap</Link>
  // </li>
  // <li className="navbar-item">
  //   <Link to="/create-student" className="nav-link">Create Student</Link>
  // </li>                
  // <Route path="/create-station" component={CreateHS} />
  // <Route path="/weathermap" component={Weathermap} />
  // <Route path="/create-student" component={Student} />
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">Smart Things Home Stations</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={Weathermap} />
        </div>
      </Router>
    );
  }
}

export default App;