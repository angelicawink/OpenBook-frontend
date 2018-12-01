import React, { Component } from 'react';
import EnvelopeGif from './EnvelopeGif';
import EnvelopeClosed from './EnvelopeClosed';
import YellowLetter from './YellowLetter';


class Letter extends Component{
  constructor(props){
    super(props);
    this.state={
      showEnvelope: true
    }
  }



  handleClick = () => {
    this.setState({
      showEnvelope: !this.state.showEnvelope
    })
  }

  render(){
    return this.state.showEnvelope ? (

        <EnvelopeClosed
          handleClick={this.handleClick}/>

      )
        :

      (
          <EnvelopeGif
            handleClick={this.handleClick}/>


    )
  }
}

export default Letter
//
// <EnvelopeGif
//   handleClick={this.handleClick}/>
//
// <YellowLetter
//   handleClick={this.handleClick}
// />

// lined yellow paper =
// "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Documents_icon.svg/651px-Documents_icon.svg.png"

// alternate envelope gif : "https://katiekershaw.files.wordpress.com/2015/09/envelope1.gif"
        // src="https://d3dvldql7ksohz.cloudfront.net/000_clients/646957/page/6469574kJDviXu.gif"
