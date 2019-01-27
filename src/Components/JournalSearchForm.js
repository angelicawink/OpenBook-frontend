import React, { Component } from "react";
import { fetchGetEntries } from "../fetches.js";

class JournalSearchForm extends Component {
  state = {
    searchTerm: ""
  };

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.getEntries();
  };

  getEntries = () => {
    let token = localStorage.getItem("token");
    fetchGetEntries(token).then(entries => {
      if (this.props.user) {
        // filter out entries written by user
        // include only entries that inlcude the search term
        let strangerEntries = entries
          .filter(entry => entry.user.id !== this.props.user.id)
          .filter(entry => entry.content.includes(this.state.searchTerm));
        // filter out diary entries that are marked 'private'
        let nonPrivateEntries = strangerEntries.filter(
          entry => entry.private === false
        );
        // collect IDs of all this user's saved entries
        let savedEntryIDs = [];
        this.props.user.saved_entries.forEach(saved =>
          savedEntryIDs.push(saved.entry.id)
        );

        this.props.setSearchResults(nonPrivateEntries);

        this.setState({
          searchTerm: ""
        });
      }
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className="search-form">
          <input
            id="search-form"
            className="search-form input"
            type="text"
            value={this.state.searchTerm}
            placeholder="search all journals by keyword, ie: 'family', 'stress', 'holiday'..."
            onChange={this.handleChange}
          />
          <button type="submit" className="search-form submit">
            Search
          </button>
        </form>
      </>
    );
  }
}

export default JournalSearchForm;
