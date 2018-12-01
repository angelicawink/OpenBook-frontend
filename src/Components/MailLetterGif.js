import React, { Component } from 'react';
import EnvelopeClosed from './EnvelopeClosed';

class MailLetterGif extends Component{

  renderFlame = () => {
      return <img
        src="https://www.mechsauce.com/wp-content/uploads/2018/09/Campfire.gif"
        id="flames"
        alt="flames"/>
  }

  render(){
    return(
      <>
        <EnvelopeClosed/>
        {this.renderFlame()}
      </>
    )
  }
}

export default MailLetterGif
