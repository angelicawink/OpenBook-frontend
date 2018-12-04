import React, { Component } from 'react';
import RhymeForm from './RhymeForm';
import RhymeResults from './RhymeResults';

class RhymeFinder extends Component {
  constructor(props){
    super(props);
    this.state={
      results: null
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


  render(){
    return(
      <div className="col-xs-3 rhyme-holder">
        <RhymeForm
          findRhyme={this.findRhyme}
          findAdjective={this.findAdjective}
          />
        <RhymeResults
          results={this.state.results}
          addWord={this.props.addWord}/>
      </div>
    )
  }
}

export default RhymeFinder
