import React, { Component } from 'react';

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

        <img
        src="https://d3dvldql7ksohz.cloudfront.net/000_clients/646957/page/6469574kJDviXu.gif"
        alt="envelope"
        id="envelope-gif"
        onClick={this.handleClick}
        />
      )
        :
(
        <div className="letter container">
          <form>

            <div id="letter-holder">
              <div id="dear">
                <label>Dear</label>
                <input
                  type="text"
                  id="dear-placeholder"
                  placeholder="terrible person in line">
                </input>
                <label>,</label>
              </div>

              <textarea
                id="letter-textarea"
                className="form-control">
              </textarea>

              <div id="with-rage">
              <label>With rage,</label>
              <input
                type="text"
                placeholder="me"></input>
                </div>
            </div>

            <button
              type="submit"
              id="letter-button"
              className="btn btn-warning btn-lg fit">Send!
            </button>

          </form>
        </div>

    )
  }
}

export default Letter
// lined yellow paper =
// "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Documents_icon.svg/651px-Documents_icon.svg.png"

// alternate envelope gif : "https://katiekershaw.files.wordpress.com/2015/09/envelope1.gif"
        // src="https://d3dvldql7ksohz.cloudfront.net/000_clients/646957/page/6469574kJDviXu.gif"
