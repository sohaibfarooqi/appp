import React, { Component } from 'react';

/**
This component implements select view 
and provides two events i.e onChange, onSubmit.

Docs Link: https://facebook.github.io/react/docs/forms.html
**/
class FlavorSelectComponent extends Component{
  
  constructor(props){
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite La Croix flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FlavorSelectComponent;