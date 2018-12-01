import React, { Component } from 'react';

class EnvelopeGif extends Component {
  render(){
    return(
      <>
        <img
        src="https://d3dvldql7ksohz.cloudfront.net/000_clients/646957/page/6469574kJDviXu.gif"
        alt="envelope"
        id="envelope-gif"
        onClick={this.props.handleClick}
        />
      </>
    )
  }
}

export default EnvelopeGif
