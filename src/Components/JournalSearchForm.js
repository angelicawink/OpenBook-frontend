import React, { Component } from "react";
import URL from "../helpers";

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
    let token = localStorage.getItem("token");

    fetch(`${URL}/entries`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(entries => {
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
