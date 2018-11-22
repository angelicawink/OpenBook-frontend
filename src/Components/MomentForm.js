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

  showRank = () => {
    switch (this.state.rank){
      case '1':
        return "absolutely terrible";
      case '2':
        return 'terrible'
      case '3':
        return 'very bad';
      case '4':
        return 'bad';
      case '5':
        return 'a bit off';
      case '6':
        return 'okay';
      case '7':
        return 'good';
      case '8':
        return 'very good';
      case '9':
        return 'great';
      case '10':
        return 'excellent';
      case '11':
        return 'absolutely amazing';
      default:
        return "absolutely amazing"
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
              <p>{this.showRank()}</p>
              <button type="submit" className="btn btn-primary">pin it</button>
            </div>

        </form>
      </>
    )
  }
}

export default MomentForm
