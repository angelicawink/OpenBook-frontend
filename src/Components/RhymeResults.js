import React, { Component } from 'react';
import RhymeItem from './RhymeItem';

class RhymeResults extends Component {

  renderResults = () => {
    if (this.props.filteredResults){
      return (
        <div id="rhyme-results">
          {this.props.filteredResults.map((result,index) =>
            <RhymeItem
              key={index}
              result={result}
              addWord={this.props.addWord}
              />)}
        </div>
      )
    } else if (this.props.results){

      return (
        <div id="rhyme-results">
          {this.props.results.map((result,index) =>
            <RhymeItem
              key={index}
              result={result}
              addWord={this.props.addWord}
              />)}
        </div>
      )
    } else {
      return null
    }
  }

  render(){
    return(
      this.renderResults()
    )
  }
}

export default RhymeResults
