import React, { Component } from 'react';

class MomentForm extends Component {
  state={
    rank: null
  }

  handleChange = (event) => {
    this.setState({
      rank: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let feelingsID = this.state.rank;
    let userID = this.props.userID

    console.log(feelingsID)
    console.log(userID)

    fetch('http://localhost:3000/api/v1/moments', {
      method: "POST",
        headers: {
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

  render(){
    return (
      <>
        <form onSubmit={this.handleSubmit} className="snapshot">
          <label>How I'm Feeling Right Now:</label>

            <div className="form-group ">
              <input
              onChange={this.handleChange}
              type="range"
              min="1"
              max="11"
              className="slider"/>
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-default">pin it</button>
            </div>

        </form>
      </>
    )
  }
}

export default MomentForm
