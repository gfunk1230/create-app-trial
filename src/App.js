import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Button } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">React-Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              Link
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
        <header className="row">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <h1>Teach at a school you love</h1>
            <h2>Get job offers through our free matching platform</h2>
          </div>
          <Button bsStyle="warning">Create a Profile</Button>
        </header>
        <div className="row">
          <p className="App-intro col-md-4">
            Selected is like a dating app for job-seeking teachers and hiring schools. Tell us what you want, we'll match you!
          </p>
          <p className="App-intro col-md-4">
          Schools have to reach out first. On average, a candidate gets contacted by 5 schools in the first week.
          </p>
          <p className="App-intro col-md-4">
            You get a coach who can help with your resume, prepping for interviews, and more. 100% free!
          </p>
        </div>
      </div>
    );
  }
}

export default App;
