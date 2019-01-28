import React, { Component } from "react";
import ResultItem from "./ResultItem";
import { fetchDeleteSavedEntry, fetchPostNewSavedEntry } from "../fetches";

class ResultstMaster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEntry: null
    };
  }

  setSelectedEntry = selectedEntry => {
    this.setState({ selectedEntry });
  };

  handleClick = event => {
    let entryID = ~~event.target.dataset.entryid;
    let userID = this.props.user.id;
    let token = localStorage.getItem("token");
    let titleInput = "Click To Add Title";

    if (this.props.savedEntryIDs.includes(entryID)) {
      let savedObj = this.props.user.saved_entries.find(
        saved => saved.entry.id === entryID
      );
      let savedID = savedObj.id;
      fetchDeleteSavedEntry(token, savedID).then(savedObj =>
        this.props.deleteSavedEntry(savedObj)
      );
    } else {
      fetchPostNewSavedEntry(token, userID, entryID, titleInput).then(entry =>
        this.props.addSavedEntry(entry)
      );
    }
  };

  render() {
    return (
      <div className="col-xs-6 search">
        <div id="holder" className="left">
          <h3 className="results-header">All Journals</h3>

          <div className="journal-search master">
            {this.props.results ? (
              this.props.results.map((result, index) => (
                <ResultItem
                  savedEntryIDs={this.props.savedEntryIDs}
                  key={index}
                  result={result}
                  user={this.props.user}
                  handleClick={this.handleClick}
                  saved={this.props.savedEntryIDs.includes(result.id)}
                  selectedEntry={this.state.selectedEntry}
                  setSelectedEntry={entry => this.setSelectedEntry(entry)}
                />
              ))
            ) : (
              <h4 id="search-result-placeholder">
                No Results Yet, Try A Search!
              </h4>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ResultstMaster;
