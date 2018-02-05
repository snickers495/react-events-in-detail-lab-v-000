
import React from 'react';
export default class DelayedButton extends React.Component {
  handleClick(event) {
    event.persist();
    const delayFunc = this.props.onDelayedClick;
    const delay = this.props.delay
    setTimeout(function(){
      delayFunc(event);
    }, delay)
  }

  render(){
    return(
      <button onClick={this.handleClick}> <button>
    )
  }
}
