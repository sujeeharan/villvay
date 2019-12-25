import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Homepage from './components/Homepage';
import { Switch, Route, Router } from 'react-router-dom';
import Signup from './components/Signup';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      loggedIn:false,
    }

    this.handleLoggedUser = this.handleLoggedUser.bind(this);
  }

  render() {
    return (
      <div className="App">
        {this.state.loggedIn ? 
        <Homepage loggedIn={this.handleLoggedUser}/> : 
        <div> <Login loggedIn={this.handleLoggedUser}/> <Signup loggedIn={this.handleLoggedUser}/> </div> }
      </div>
    );
  }

  handleLoggedUser = (loggedIn) => {
    this.setState({
      loggedIn: loggedIn
    })
  }
}

export default App;
