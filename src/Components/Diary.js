import React, { Component } from "react";
import { Card, CardBody } from "reactstrap";
import { fetchEditPrivacy } from "../fetches.js";

class Diary extends Component {
  state = {
    currentEntryIndex: this.props.user.entries.length - 1
  };

  getDate = () => {
    let timeStamp = this.props.user.entries[this.state.currentEntryIndex]
      .created_at;
    let date = new Date(timeStamp).toDateString();
    return date;
  };

  getTime = () => {
    let timeStamp = this.props.user.entries[this.state.currentEntryIndex]
      .created_at;
    let time = new Date(timeStamp).toLocaleTimeString();
    return time;
  };

  getPreviousEntry = () => {
    if (this.state.currentEntryIndex !== 0) {
      this.setState({
        currentEntryIndex: this.state.currentEntryIndex - 1
      });
    }
  };

  getNextEntry = () => {
    if (this.state.currentEntryIndex < this.props.user.entries.length - 1) {
      this.setState({
        currentEntryIndex: this.state.currentEntryIndex + 1
      });
    }
  };

  renderBackButton = () => {
    if (this.state.currentEntryIndex !== 0) {
      return "1";
    } else {
      return ".4";
    }
  };

  renderNextButton = () => {
    if (this.state.currentEntryIndex === this.props.user.entries.length - 1) {
      return ".4";
    } else {
      return "1";
    }
  };

  togglePrivacy = event => {
    let entryID = this.props.user.entries[this.state.currentEntryIndex].id;
    let token = localStorage.getItem("token");
    let currentPrivacy = event.target.dataset.private;
    let updatedPrivacy;
    if (currentPrivacy === "true") {
      updatedPrivacy = "false";
    } else {
      updatedPrivacy = "true";
    }

    this.editDiaryEntryPrivacy(token, entryID, updatedPrivacy);
  };

  editDiaryEntryPrivacy = (token, entryID, updatedPrivacy) => {
    fetchEditPrivacy(token, entryID, updatedPrivacy).then(data => {
      console.log("fetch update privacy complete");
      console.log(data);
      this.props.togglePrivacyInState(data);
    });
  };

  render() {
    const thisEntry = this.props.user.entries[this.state.currentEntryIndex];
    return (
      <>
        <div>
          <div className="col-xs-4">
            <img
              onClick={this.getPreviousEntry}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/White_left_arrow.svg/2000px-White_left_arrow.svg.png"
              alt="previous-button"
              style={{ opacity: this.renderBackButton() }}
              className="arrow next"
            />
          </div>

          <div className="col-xs-4">
            <h3 className="date-header">{this.getDate()}</h3>

            {thisEntry.private ? (
              <img
                data-private={true}
                onClick={this.togglePrivacy}
                id="lock-icon"
                src="https://freeiconshop.com/wp-content/uploads/edd/lock-flat.png"
                alt="lock"
              />
            ) : (
              <img
                data-private={false}
                onClick={this.togglePrivacy}
                id="hidden-lock"
                src="http://www.iconarchive.com/download/i87176/graphicloads/colorful-long-shadow/Unlock.ico"
                alt="lock"
              />
            )}

            <h5 className="time-header">{this.getTime()}</h5>
          </div>

          <div className="col-xs-4">
            <img
              onClick={this.getNextEntry}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/White_left_arrow.svg/2000px-White_left_arrow.svg.png"
              alt="next-button"
              style={{ opacity: this.renderNextButton() }}
              className="arrow previous"
            />
          </div>
        </div>

        <div>
          <Card className="diary-page">
            <CardBody>{thisEntry.content}</CardBody>
          </Card>
        </div>

        <button id="new-entry" onClick={this.props.entryLogged} type="submit">
          new entry
        </button>
      </>
    );
  }
}

export default Diary;
