import React, { Component } from 'react';

/**
Unordered list of numbers as Component.
Key should be assigned to each <li> element
for proper updation.
**/
class NumberListComponent extends Component{
  
  constructor(props){
    super(props);
    this.numbers = props.numbers;
  }

  render(){
    const listItem = this.numbers.map((number) => <li key={number.toString()}>{number} </li>);
    return(
      <ul>{listItem}</ul>
      );
  }
}

export default NumberListComponent;