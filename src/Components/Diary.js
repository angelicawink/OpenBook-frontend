import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';
import { Button } from 'semantic-ui-react'

class Diary extends Component {
  state={
    currentEntryIndex: this.props.user.entries.length-1
  }

  componentDidMount(){
  }

  getDate = () => {
    console.log(this.props)
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

  redirectToJournalSearch = () => {
      this.props.history.push(`/search`)
  }

  render(){
    return(
      <div>
        <h3>{this.getDate()}</h3>
        <h6>{this.getTime()}</h6>
          <Card className="diary-page">
            <CardBody>{this.props.user.entries[this.state.currentEntryIndex].content}</CardBody>

          </Card>
            <div>
              <img onClick={this.getPreviousEntry} src="http://www.iconninja.com/files/184/20/51/direction-back-arrow-left-arrows-chevron-icon.png" alt="back-arrow" className="arrow"/>
              <img onClick={this.getNextEntry} src="https://www.shareicon.net/download/2016/07/10/120016_arrows.svg" alt="back-arrow" className="arrow"/>
            </div>

          <Button color="orange" onClick={this.props.entryLogged} type="submit">new entry</Button>

      </div>
    )
  }
}

export default Diary
