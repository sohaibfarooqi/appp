import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Clock extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {date: new Date()};
  }
  
  componentDidMount() 
  {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount()
  {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render(){
    return (
      <div>
      <h2>Time is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
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
        </p>
      </div>
    );
  }
}
