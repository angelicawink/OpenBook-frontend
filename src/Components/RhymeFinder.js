import React, { Component } from 'react';
import RhymeForm from './RhymeForm';
import RhymeResults from './RhymeResults';

class RhymeFinder extends Component {
  constructor(props){
    super(props);
    this.state={
      results: null,
      filteredResults: null
    }
  }

  findRhyme = (word) => {
    fetch(`https://api.datamuse.com/words?rel_rhy=${word}`)
    .then(res => res.json())
    .then(data => this.setState({results: data}))
  }

  findAdjective = (word) => {
    fetch(`https://api.datamuse.com/words?rel_jjb=${word}`)
    .then(res => res.json())
    .then(data => this.setState({results: data}))
  }

  filterBySyllableNum = (num) => {
    let syll = ~~num;
    if (this.state.results ){
      if (syll === 0){
        this.setState({
          filteredResults: null
        })
        return
      } else {
        let filteredResults = this.state.results.filter(result => result.numSyllables === syll)
        this.setState({
          filteredResults: filteredResults
        })
      }
    }
  }

  render(){
    return(
      <div className="col-xs-5 rhyme-holder">
        <RhymeForm
          filterBySyllableNum={this.filterBySyllableNum}
          findRhyme={this.findRhyme}
          findAdjective={this.findAdjective}
          />
        <RhymeResults
          results={this.state.results}
          filteredResults={this.state.filteredResults}
          addWord={this.props.addWord}/>
      </div>
    )
  }
}

export default RhymeFinder
