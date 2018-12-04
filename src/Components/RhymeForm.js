import React, { Component } from 'react';

class RhymeForm extends Component {
  constructor(props){
    super(props);
    this.state={
      rhymeWord: '',
      adjectiveWord: ''
    }
  }

  handleChange = (event) => {
    if (event.target.name === "rhymeWord"){
      this.setState({
        adjectiveWord: '',
        rhymeWord: event.target.value,
      }, () => this.props.findRhyme(this.state.rhymeWord))
    } else {
      this.setState({
        rhymeWord: '',
        adjectiveWord: event.target.value
      }, () => this.props.findAdjective(this.state.adjectiveWord))
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Find words that rhyme with:</label>
          <input
            type="text"
            onChange={this.handleChange}
            name="rhymeWord"
            value={this.state.rhymeWord}/>
          <br></br>

          <label># of syllables</label>
          <input type="text" className="syllable-input"/>

          <label>Find adjectives that describe:</label>
          <input
            type="text"
            onChange={this.handleChange}
            name="adjectiveWord"
            value={this.state.adjectiveWord}/>
          <br></br>
          <label># of syllables</label>
          <input type="text" className="syllable-input"/>
        </form>
      </div>
    )
  }
}

export default RhymeForm
