import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

class MomentForm extends Component {
  state={
    rank: '11'
  }

  handleChange = (event) => {
    this.setState({
      rank: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let feelingsID = this.state.rank;
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
          feeling_id: feelingsID
        })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
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
              onChange={this.handleChange}
              type="range"
              min="1"
              max="11"
              className="slider"/>
            </div>

            <div className="form-group">
              <h2>{this.showRank()}</h2>
              <Button basic type="submit">chart it</Button>
            </div>

        </form>
      </>
    )
  }
}

export default MomentForm
