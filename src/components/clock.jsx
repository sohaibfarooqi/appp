import React, { Component } from 'react';

/**
Clock Component Class. Represent Clock in Real time.
Format HH.MM.SS.

Docs Link: https://facebook.github.io/react/docs/state-and-lifecycle.html
**/
class Clock extends Component{
  
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }
  
  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
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

export default Clock;