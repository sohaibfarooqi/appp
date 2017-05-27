import React, { Component } from 'react';

/**
Clock Component Class. Represent Clock in Real time.
Format HH.MM.SS
**/
export class Clock extends Component
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

/**Implements clickable toggle button component.
**/
export class Toggle extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {isToggleOn: true};
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick()
  {
    this.setState(prevState => ({isToggleOn: !prevState.isToggleOn}));
  }

  render()
  {
    return(
            <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
      );
  }
}