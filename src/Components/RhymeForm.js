import React, { Component } from 'react';

class RhymeForm extends Component {
  constructor(props){
    super(props);
    this.state={
      rhymeWord: '',
      adjectiveWord: '',
      syllables: ''
    }
  }

  handleChange = (event) => {
    if (event.target.name === "rhymeWord"){
      this.setState({
        adjectiveWord: '',
        syllables: '',
        rhymeWord: event.target.value,
      }, () => this.props.findRhyme(this.state.rhymeWord))
    } else {
      this.setState({
        rhymeWord: '',
        syllables: '',
        adjectiveWord: event.target.value
      }, () => this.props.findAdjective(this.state.adjectiveWord))
    }
  }

  setSyllables = (event) => {
    this.setState({
      syllables: event.target.value
    }, () => this.props.filterBySyllableNum(this.state.syllables))

  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  render(){
    return(
      <div>
        <form className="form-group" onSubmit={this.handleSubmit}>
          <label className="font">Find words that rhyme with:</label>
          <br></br>

          <input
            className="form-control rhyme"
            type="text"
            onChange={this.handleChange}
            name="rhymeWord"
            value={this.state.rhymeWord}/>

        <br></br>

        <label className="font"># of syllables (optional)</label>
          <br></br>

          <input
            onChange={this.setSyllables}
            type="text"
            value={this.state.syllables}
            className="form-control syllable"/>

          <br></br>

          <label className="font">Find adjectives to describe:</label>
          <br></br>

          <input
            type="text"
            className="form-control adjective"
            onChange={this.handleChange}
            name="adjectiveWord"
            value={this.state.adjectiveWord}/>

        </form>
      </div>
    )
  }
}

export default RhymeForm
