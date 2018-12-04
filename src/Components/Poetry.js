import React, { Component } from 'react';
import Poem from './Poem';
import RhymeFinder from './RhymeFinder';

class Poetry extends Component{
  state={
    showPoemForm: true,
    wordToAdd: null
  }

  addWord = (word) => {
    this.setState({
      wordToAdd: word
    })
  }

  togglePoetryDisplay = () => {
    this.setState({
      showPoemForm: !this.state.showPoemForm
    })
  }

  render(){
    return(
      <>
        <div className="poetry-container">
        </div>
        {this.state.showPoemForm ?

          <div className="container poetry">
            <Poem
              user={this.props.user}
              wordToAdd={this.state.wordToAdd}
              togglePoetryDisplay={this.togglePoetryDisplay}/>
            <RhymeFinder
              addWord={this.addWord}/>
          </div>

          :
          <div className="container poetry">
            You're amazing.
            <button onClick={this.togglePoetryDisplay}>Write another</button>
            <button onClick={() => this.props.history.push('/wallow')}>Go To My Poems</button>
          </div>
        }

      </>
    )
  }
}

export default Poetry
