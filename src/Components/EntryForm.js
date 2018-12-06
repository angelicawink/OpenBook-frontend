import React, { Component } from 'react';
import URL from '../helpers'

class EntryForm extends Component {
  state={
    content: '',
    checked: false
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value
    })
  }

  handleSubmit = (event) => {

    event.preventDefault();
    let entryContent = this.state.content;
    let userID = this.props.user.id;
    let token = localStorage.getItem('token');
    let privacyInput = event.target.children[2].children[0].checked
debugger
    fetch(`${URL}/entries`, {
      method: "POST",
        headers: {
          "Content-Type" : "application/json",
          "Accept" : "application/json",
          "Authorization" : `Bearer ${token}`
        },
        body: JSON.stringify({
          user_id: userID,
          content: entryContent,
          private: privacyInput
        })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.props.addEntry(data)
      this.props.entryLogged();
      this.setState({
        content: ''
      })
    })
  }

  getTodaysDate = () => {
    let date = Date().split(" ");
    let displayDate = date[0] + ". " + date[1]+ " " + date[2] + ", " + date[3];

    return displayDate;
  }

  getTodaysTime = () => {
    let date = Date().split(" ");
    let time = date[4].slice(0,5).split(":")
    let mins = time[1]
    let hours;
    let am_pm;

    if (~~time[0] > 12){
      hours = time[0] -12;
      am_pm = ' pm';
    } else if (~~time[0] === 12) {
      hours = time[0];
      am_pm = ' pm'
    } else if (~~time[0] < 12) {
      hours = time[0];
      am_pm = ' am';
    }
    let displayTime = hours + ":" + mins + am_pm
    return displayTime;
  }

  toggleCheckbox = () => {
    this.setState({
      checked: !this.state.checked
    })
  }

  render(){
    return(
      <>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group new-entry-container">
            <h3>{this.getTodaysDate()}</h3>
            <h6>{this.getTodaysTime()}</h6>
            <textarea onChange={this.handleChange} id="new-diary-entry"></textarea>
          </div>

          <button id="submit-entry" type="submit">Submit</button>
          <div onClick={this.toggleCheckbox} id="private">
            Private <input type="checkbox" id="private-checkbox" checked={this.state.checked}/>
          </div>
        </form>

        <button id="cancel-entry" onClick={this.props.entryLogged}>Cancel</button>


      </>
    )
  }
}

export default EntryForm
