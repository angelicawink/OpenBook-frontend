import React, { Component } from "react";
import JournalSearchDisplay from "./JournalSearchDisplay";
import JournalSearchForm from "./JournalSearchForm";
import URL from "../helpers";
import { fetchGetEntries } from "../fetches.js";

class JournalSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null
    };
  }

  setSearchResults = entries => {
    this.setState({
      results: entries
    });
  };

  componentDidMount() {
    this.getEntries();
  }

  getEntries = () => {
    debugger;
    let token = localStorage.getItem("token");
    fetchGetEntries(token).then(entries => {
      let publicEntries = entries.filter(entry => entry.private == false);
      this.setEntries(publicEntries);
    });
  };

  setEntries = entries => {
    this.setState({
      results: entries
    });
  };

  render() {
    return (
      <div className="search-body">
        <div className="search-header">
          See what other people are writing about:
          <JournalSearchForm
            user={this.props.user}
            setSearchResults={this.setSearchResults}
          />
        </div>

        <JournalSearchDisplay
          results={this.state.results}
          addSavedEntry={this.props.addSavedEntry}
          deleteSavedEntry={this.props.deleteSavedEntry}
          savedEntryIDs={this.props.savedEntryIDs}
          user={this.props.user}
        />
      </div>
    );
  }
}

export default JournalSearch;
