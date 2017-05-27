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

/**
Helper functions for Login Control
**/
function LoginButton(props)   
{
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }

function LogoutButton(props) 
{
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function UserGreeting(props) 
{
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) 
{
  return <h1>Please sign up.</h1>;
}

function Greeting(props) 
{
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) 
  {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}


/**
LoginControl component provides messages based on 
whether user is logged-in or logged-out.
**/

export class LoginControl extends Component
{
  constructor(props)
  {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};

  }

  handleLoginClick() 
  {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() 
  {
    this.setState({isLoggedIn: false});
  }

  render()
  {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    
    if(isLoggedIn)
    {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    }
    else
    {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
      );
  }
}

export class NumberList extends Component
{
  constructor(props)
  {
    super(props);
    this.numbers = props.numbers;
  }

  render()
  {
    const listItem = this.numbers.map((number) => <li key={number.toString()}>{number}</li>);
    return(
      <ul>{listItem}</ul>
      );
  }
}