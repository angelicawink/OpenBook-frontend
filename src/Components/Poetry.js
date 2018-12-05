import React, { Component } from 'react';
import Poem from './Poem';
import RhymeFinder from './RhymeFinder';

class Poetry extends Component{
  state={
    showPoemForm: false,
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
        {this.state.showPoemForm ?

          <div className="container poetry">
            <Poem
              addPoem={this.props.addPoem}
              user={this.props.user}
              wordToAdd={this.state.wordToAdd}
              togglePoetryDisplay={this.togglePoetryDisplay}/>
            <RhymeFinder
              addWord={this.addWord}/>
          </div>

          :
          <div className="container poem-done">
            <h2>
              Wow. Amazing.
            </h2>
            <button className="new-entry" onClick={this.togglePoetryDisplay}>Write another</button>
            <button className="new-entry" onClick={() => this.props.history.push('/wallow')}>Go to my poems</button>
          </div>
        }

      </>
    )
  }
}

export default Poetry
