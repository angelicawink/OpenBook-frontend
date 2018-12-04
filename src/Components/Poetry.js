import React, { Component } from 'react';
import Poem from './Poem';
import RhymeFinder from './RhymeFinder';

class Poetry extends Component{
  state={
    wordToAdd: null
  }

  addWord = (word) => {
    this.setState({
      wordToAdd: word
    })
  }

  render(){
    return(
      <>
        <div className="page-header poetry">
          You're a Poet
        </div>

        <div className="container poetry">
          <Poem
            wordToAdd={this.state.wordToAdd}/>
          <RhymeFinder
            addWord={this.addWord}/>
        </div>

      </>
    )
  }
}

export default Poetry
