import React, { Component } from 'react';

class Poem extends Component {
  constructor(props){
    super(props);
    this.state={
      content: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value
    })
  }

  componentDidUpdate(prevProps){
    if (this.props.wordToAdd !== prevProps.wordToAdd){
      this.setState({
        content: this.state.content.concat(this.props.wordToAdd)
      })
    }
  }


  render(){
    return(
      <>
        <div className="col-xs-9">
          <form>
            <input type="text" placeholder="Title" className="poem-title"/>
            <textarea
              id="poem-textarea"
              onChange={this.handleChange}
              className="poem-body"
              placeholder="My Amazing Poem"
              value={this.state.content}>
            </textarea>
          </form>
        </div>
      </>
    )
  }
}

export default Poem
