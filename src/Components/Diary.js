import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';
import { Button } from 'semantic-ui-react'

class Diary extends Component {
  state={
    currentEntryIndex: this.props.user.entries.length-1
  }

  getDate = () => {
    let date = new Date(this.props.user.entries[this.state.currentEntryIndex].created_at).toString().split(" ")

    let displayDate = date[0] + ". " + date[1]+ " " + date[2] + ", " + date[3];
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
        <h3>{this.getDate()}</h3>
        <h6>{this.getTime()}</h6>
          <Card className="diary-page">
            <CardBody>{this.props.user.entries[this.state.currentEntryIndex].content}</CardBody>

          </Card>
            <div>
                <img
                  onClick={this.getPreviousEntry}
                  src="http://www.clker.com/cliparts/U/0/5/1/s/5/red-arrow-hi.png"
                  alt="previous-button"
                  className="arrow previous"/>

                <img
                  onClick={this.getNextEntry}
                  src="http://www.clker.com/cliparts/U/0/5/1/s/5/red-arrow-hi.png"
                  alt="next-button"
                  className="arrow next"/>

            </div>

          <Button color="orange" id="new-entry" onClick={this.props.entryLogged} type="submit">new entry</Button>

      </div>
    )
  }
}

export default Diary

//possible diary image:
// https://www.wmmpa.com/wp-content/uploads/2017/02/book-icon.png

//conditionally rendering arrow buttons :

// {this.state.currentEntryIndex !== 0 ?
//   <img
//     onClick={this.getPreviousEntry}
//     src="http://www.clker.com/cliparts/U/0/5/1/s/5/red-arrow-hi.png"
//     alt="previous-button"
//     className="arrow previous"/>
//   : null
// }
// {this.state.currentEntryIndex !== this.props.user.entries.length-1 ?
//   <img
//     onClick={this.getNextEntry}
//     src="http://www.clker.com/cliparts/U/0/5/1/s/5/red-arrow-hi.png"
//     alt="next-button"
//     className="arrow next"/>
//   : null
// }
