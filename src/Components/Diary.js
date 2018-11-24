import React, { Component } from 'react';
import { Card, CardText, CardBody, Button } from 'reactstrap';

class Diary extends Component {
  state={
    currentEntryIndex: this.props.user.entries.length-1
  }

  getDate = () => {
    let date = new Date(this.props.user.entries[this.state.currentEntryIndex].created_at).toString().split(" ")

    let displayDate = date[0] + ", " + date[1]+ " " + date[2] + " " + date[3];
    return displayDate;
  }

  getTime = () => {
    let date = new Date(this.props.user.entries[this.state.currentEntryIndex].created_at).toString().split(" ");

    let time = date[4].split(":")

    let hour = time[0]
    let min = time[1]
    let am_pm;

    if (hour > 12){
      am_pm = 'pm';
      hour = hour -12
    } else {
      am_pm = 'am'
    }

   let displayTime = hour + ":" + min + " " + am_pm;
   return displayTime;
  }

  getPreviousEntry = () => {
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

          </Card>

            <img onClick={this.getPreviousEntry} src="http://www.iconninja.com/files/184/20/51/direction-back-arrow-left-arrows-chevron-icon.png" alt="back-arrow" className="arrow"/>

            <img onClick={this.getNextEntry} src="https://www.shareicon.net/download/2016/07/10/120016_arrows.svg" alt="back-arrow" className="arrow"/>

          <p><button onClick={this.props.entryLogged} type="submit" className="btn btn-primary">new entry</button></p>
      </div>
    )
  }
}

export default Diary
