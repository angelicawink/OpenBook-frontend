import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';
import { Button, Icon } from 'semantic-ui-react';


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
    const thisEntry = this.props.user.entries[this.state.currentEntryIndex]
    console.log(thisEntry)
    return(
      <div>
        <h3 className="date-header">{this.getDate()}</h3>

            {thisEntry.private ?
              <img id="lock-icon" src="https://freeiconshop.com/wp-content/uploads/edd/lock-flat.png" alt="lock"/>
              :
               <img id="hidden-lock" src="https://freeiconshop.com/wp-content/uploads/edd/lock-flat.png" alt="lock"/>
            }

        <h6 className="time-header">{this.getTime()}</h6>

          <Card className="diary-page">
            <CardBody>
              {thisEntry.content}

            </CardBody>
          </Card>

            <div>
                <img
                  onClick={this.getPreviousEntry}
                  src="https://www.mtec.or.th/wp-content/uploads/2018/02/icon-arrow-right.png"
                  alt="previous-button"
                  className="arrow previous"/>

                <img
                  onClick={this.getNextEntry}
                  src="https://www.mtec.or.th/wp-content/uploads/2018/02/icon-arrow-right.png"
                  alt="next-button"
                  className="arrow next"/>

            </div>

          <button id="new-entry" onClick={this.props.entryLogged} type="submit">new entry</button>

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
