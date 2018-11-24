import React, { Component } from 'react';

class EntryForm extends Component {
  state={
    content: ''
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let entryContent = this.state.content;
    let userID = this.props.user.id

    fetch(`http://localhost:3000/api/v1/entries`, {
      method: "POST",
        headers: {
          "Content-Type" : "application/json",
          "Accept" : "application/json"
        },
        body: JSON.stringify({
          user_id: userID,
          content: entryContent
        })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.props.entryLogged();
      this.setState({
        content: ''
      })
    })
  }

  getTodaysDate = () => {
    let date = Date().split(" ");
    let displayDate = date[0] + ", " + date[1]+ " " + date[2] + " " + date[3];

    return displayDate;
  }

  render(){
    return(
      <>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group new-entry-container">
            <h3>{this.getTodaysDate()}</h3>
            <textarea onChange={this.handleChange} className="form-control" id="new-diary-entry"></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </>
    )
  }
}

export default EntryForm
