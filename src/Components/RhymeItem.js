import React, { Component } from 'react';

class RhymeItem extends Component {

  handleClick = (event) => {
    let word = event.target.innerText
    this.props.addWord(word)
  }

  render(){
    return(
      <div className="rhyme-item"
        onClick={this.handleClick}>
        {this.props.result.word}
      </div>
    )
  }
}

export default RhymeItem
