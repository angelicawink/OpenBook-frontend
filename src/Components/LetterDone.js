import React, { Component } from 'react';

class LetterDone extends Component{
  constructor(props){
    super(props)
    this.state={
      render:false
    }
  }

componentDidMount(){
  setTimeout(this.setRendertoTrue, 1200)
}

setRendertoTrue = () => {
  this.setState({
    render: true
  })
}

  render(){
    return(
      <div id="done">
        Ah. That feels better.

        <div>
          {this.state.render ?
            <button id="write-another" onClick={this.props.handleClick}>Rage again.</button>
            :null}
        </div>
      </div>

    )
  }
}

export default LetterDone
