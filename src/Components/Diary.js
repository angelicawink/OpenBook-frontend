import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';
// import { Icon } from 'semantic-ui-react';


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

  renderBackButton = () => {
    if (this.state.currentEntryIndex !== 0){
      return "1"
    }else  {
      return ".4"
  }}

  renderNextButton = () => {
    if (this.state.currentEntryIndex === this.props.user.entries.length-1){
      return ".4"
    } else {
      return "1"
    }
  }

  togglePrivacy = (event) => {
    let entryID = (this.props.user.entries[this.state.currentEntryIndex].id);
    let token = localStorage.getItem('token');
    let currentPrivacy = event.target.dataset.private;
    let updatedPrivacy;
    if (currentPrivacy === 'true'){
      updatedPrivacy = 'false'
    } else {
      updatedPrivacy = 'true'
    }

    fetch(`http://localhost:3000/api/v1/entries/${entryID}`, {
      method: "PATCH",
      headers: {
         "Content-Type" : "application/json",
        "Accept" : "application/json",
        "Authorization" : `Bearer ${token}`
      },
      body: JSON.stringify({
        private: updatedPrivacy
      })
    }).then(res => res.json()).then(data => this.props.togglePrivacyInState(data))

  }

  render(){
    const thisEntry = this.props.user.entries[this.state.currentEntryIndex]
    return (
      <>
      <div>

        <div className="col-xs-4">
          <img
            onClick={this.getPreviousEntry}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/White_left_arrow.svg/2000px-White_left_arrow.svg.png"
            alt="previous-button"
            style={{opacity: this.renderBackButton()}}
            className="arrow next"/>
        </div>

        <div className="col-xs-4">
          <h3 className="date-header">{this.getDate()}</h3>

              {thisEntry.private ?
                <img data-private={true} onClick={this.togglePrivacy} id="lock-icon" src="https://freeiconshop.com/wp-content/uploads/edd/lock-flat.png" alt="lock"/>
                :
                 <img data-private={false} onClick={this.togglePrivacy} id="hidden-lock"  src="http://www.iconarchive.com/download/i87176/graphicloads/colorful-long-shadow/Unlock.ico" alt="lock"/>
              }

          <h6 className="time-header">{this.getTime()}</h6>
        </div>

        <div className="col-xs-4">
          <img
            onClick={this.getNextEntry}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/White_left_arrow.svg/2000px-White_left_arrow.svg.png"
            alt="next-button"
            style={{opacity: this.renderNextButton()}}
            className="arrow previous"/>
        </div>

      </div>

        <div>
          <Card className="diary-page">
            <CardBody>
              {thisEntry.content}

            </CardBody>
          </Card>
        </div>

          <button id="new-entry" onClick={this.props.entryLogged} type="submit">new entry</button>

      </>
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
