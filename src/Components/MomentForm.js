import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

class MomentForm extends Component {
  state={
    rank: '11',
    setting: '1'
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let feelingsID = this.state.rank;
    let settingID = this.state.setting
    let userID = this.props.user.id
    let token = localStorage.getItem('token')

    console.log(feelingsID)
    console.log(userID)

    fetch('http://localhost:3000/api/v1/moments', {
      method: "POST",
        headers: {
          "Authorization" : `Bearer ${token}`,
          "Content-Type" : "application/json",
          "Accept" : "application/json"
        },
        body: JSON.stringify({
          user_id: userID,
          feeling_id: feelingsID,
          setting_id: settingID
        })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.props.addMoment(data)
      this.props.snapshotLogged()
    })

  }

  showRank = () => {
    switch (this.state.rank){
      case '1':
        return "Absolutely Horrible";
      case '2':
        return 'Terrible'
      case '3':
        return 'Very Bad';
      case '4':
        return 'Bad';
      case '5':
        return 'A Bit Off';
      case '6':
        return 'Okay';
      case '7':
        return 'Good';
      case '8':
        return 'Very Good';
      case '9':
        return 'Great';
      case '10':
        return 'Excellent';
      case '11':
        return 'Absolutely Amazing';
      default:
        return "Absolutely Amazing"
    }
  }

  render(){
    return (
      <>
        <form onSubmit={this.handleSubmit} className="snapshot">
          <h3>How I'm Feeling Right Now:</h3>

            <div className="form-group ">
              <input
              name="rank"
              onChange={this.handleChange}
              type="range"
              min="1"
              max="11"
              className="slider"/>
            </div>

            <select name="setting" onChange={this.handleChange} className="form-group">
              <option value="1">at work</option>
              <option value="2">outdoors</option>
              <option value="3">exercising</option>
              <option value="4">downtime</option>
              <option value="5">socializing</option>
              <option value="6">with family</option>
              <option value="7">Other</option>
            </select>

            <div className="form-group">
              <h2>{this.showRank()}</h2>
              <Button color="orange" type="submit">chart it</Button>
            </div>

        </form>
      </>
    )
  }
}

export default MomentForm
