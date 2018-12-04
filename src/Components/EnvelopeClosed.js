import React, { Component } from 'react';

class EnvelopeClosed extends Component{
  render(){
    return(

      <div className="envelope-stamp">
        
        <div
          id="envelope"
          onClick={this.props.handleClick}>

          <img
            id="postage"
            src="https://www.postagehq.com/wp-content/uploads/2018/08/postage-stamps-icon-150x150.png" alt="stamp"/>

          <div id="address">
            7200 Oblivion Boulevard
          </div>

        </div>
      </div>

    )
  }
}

export default EnvelopeClosed
