import React, { Component } from 'react';
// import { Button } from 'semantic-ui-react'
import URL from '../helpers'

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

    fetch(`${URL}/moments`, {
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
            <label id="right-now">Right now I'm feeling:</label>
            <h2 id="show-rank">{this.showRank()}</h2>


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
              <option value="1" className="val">I'm at work</option>
              <option value="2" className="val">I'm outdoors</option>
              <option value="3" className="val">I'm exercising</option>
              <option value="4" className="val">I'm just chillin</option>
              <option value="5" className="val">I'm socializing</option>
              <option value="6" className="val">I'm with family</option>
              <option value="7" className="val">I'm with my signicant other</option>
              <option value="8" className="val">I'm doing something else</option>
            </select>

            <div className="form-group">
              <button id="new-moment" type="submit">chart it</button>
            </div>

        </form>
      </>
    )
  }
}

export default MomentForm
