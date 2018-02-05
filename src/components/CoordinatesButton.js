// Code CoordinatesButton Component Here

// Code CoordinatesButton Component Here
import React from 'react';
export default class CoordinatesButton extends React.Component {
  handleClick(event) {
    const x = event.clientX;
    const y = event.clientY;
    this.props.onReceiveCoordinates([x, y]);
  }

  render(){
    return(
      <button onClick={this.handleClick}> <button>
    )
  }
}
