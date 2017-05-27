import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Clock, Toggle, LoginControl} from './components';
/**
Main Application component. Encapsulate all other components.
Includes Main application banner, logo and other components
defined in ./components.js
**/
export class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        <Clock />
        <Toggle />
        <LoginControl />
        </p>
      </div>
    );
  }
}
