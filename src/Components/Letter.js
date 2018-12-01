import React, { Component } from 'react';
import EditableLabel from 'react-inline-editing';


class Letter extends Component{
  constructor(props){
    super(props);
    this.state={
      showEnvelope: true
    }
  }

    handleFocus = (text) => {
      console.log('Focused with text: ' + text);
    }



    handleFocusOut = (title) => {
        console.log('Left editor with text: ' + title);
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
                Dear
                <EditableLabel
                  id="terrible person"
                  text='terrible person'
                  inputWidth='100px'
                  inputHeight='20px'
                  inputMaxLength='50'
                  onFocus={this.handleFocus}
                  onFocusOut={this.handleFocusOut}
                  />,
              </div>

              <textarea
                id="letter-textarea"
                className="form-control">
              </textarea>

              <div>
                <label
                  id="with-rage">
                  With rage,
                </label>
              </div>

              <div>
                <label
                  id="me">
                    Me
                </label>
              </div>


            </div>


          </form>

          <button
            onClick={this.handleClick}
            type="submit"
            id="go-back-button"
            className="btn btn-warning btn-lg fit">Go Back
          </button>

          <button
            onClick={this.handleClick}
            type="submit"
            id="send-button"
            className="btn btn-warning btn-lg fit">Send!
          </button>
        </div>

    )
  }
}

export default Letter
// lined yellow paper =
// "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Documents_icon.svg/651px-Documents_icon.svg.png"

// alternate envelope gif : "https://katiekershaw.files.wordpress.com/2015/09/envelope1.gif"
        // src="https://d3dvldql7ksohz.cloudfront.net/000_clients/646957/page/6469574kJDviXu.gif"
