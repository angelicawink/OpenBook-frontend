import React, { Component } from 'react';
import RhymeItem from './RhymeItem';

class RhymeResults extends Component {

  render(){
    return(
      this.props.results ?
        <div id="rhyme-results">
          {this.props.results.map((result,index) =>
            <RhymeItem
              key={index}
              result={result}
              addWord={this.props.addWord}
              />)}
        </div>

      : null
    )
  }
}

export default RhymeResults
