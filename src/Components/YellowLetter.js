import React, { Component } from 'react';
// import EditableLabel from 'react-inline-editing';


class YellowLetter extends Component {

    handleFocus = (text) => {
      console.log('Focused with text: ' + text);
    }



    handleFocusOut = (title) => {
        console.log('Left editor with text: ' + title);
    }


  render(){
    return(
      <div className="letter container">
          <form>

            <div id="letter-holder">
              <div id="dear">
                <label>Dear Terrible Person,</label>
              </div>

              <textarea
                id="letter-textarea"
                className="form-control"
                placeholder="Click to write your angriest vent letter here..">
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
            onClick={this.props.goBack}
            type="submit"
            id="go-back-button"
            className="btn btn-warning btn-lg fit">Go Back
          </button>

          <button
            onClick={this.props.send}
            type="submit"
            id="send-button"
            className="btn btn-warning btn-lg fit">Send!
          </button>
        </div>
    )
  }
}

export default YellowLetter
