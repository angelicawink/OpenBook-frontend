import React, { Component } from 'react';
import { Card, CardText, CardBody, Button } from 'reactstrap';

class Diary extends Component {
  state={
    currentEntryIndex: this.props.user.entries.length-1
  }

  getDate = () => {
    let timestamp = this.props.user.entries[this.state.currentEntryIndex].created_at
    let wholeDate = timestamp.slice(0, 10);
    let monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

    let year = wholeDate.slice(0,4);
    let date = wholeDate.slice(8,10);
    let month = monthsArray[wholeDate.slice(5,7) -1]

    return (month + " " + date + ", " + year)

  }

  getTime = () => {
    let timestamp = this.props.user.entries[this.state.currentEntryIndex].created_at
    let wholeTime = timestamp.slice(11, -8);
    let hour = wholeTime.slice(0,2);
    let min = wholeTime.slice(3);
    let am_pm;

    if (hour > 12){
      am_pm = 'pm';
      hour = hour -12
    } else {
      am_pm = 'am'
    }
   let time = hour + ":" + min + " " + am_pm;

   return time
  }

  getPreviousEntry = () => {
    // let index = this.props.user.entries.length-1;
    if (this.state.currentEntryIndex !== 0){
      this.setState({
        currentEntryIndex: this.state.currentEntryIndex -1
      })
    }
  }

  getNextEntry = () => {
    if (this.state.currentEntryIndex < this.props.user.entries.length-1){
      this.setState({
        currentEntryIndex: this.state.currentEntryIndex +1
      })
    }
  }

  render(){
    return(
      <div>
          <Card className="diary-page">
            <h4>{this.getDate()}</h4>
            <h5>{this.getTime()}</h5>

            <CardBody>{this.props.user.entries[this.state.currentEntryIndex].content}</CardBody>

            <Button onClick={this.getPreviousEntry}>Previous</Button>
            <Button onClick={this.getNextEntry}>Next</Button>

          </Card>

          <button onClick={this.props.entryLogged} type="submit" className="btn btn-primary">write new entry</button>
      </div>
    )
  }
}

export default Diary
