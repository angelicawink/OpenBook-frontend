import React, { Component } from 'react';

class JournalSearchForm extends Component {
  state={
    searchTerm: ''
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let token = localStorage.getItem('token')

    fetch(`http://localhost:3000/api/v1/entries`, {
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(entries => {
      if (this.props.user){
// filter out entries written by user
// include only entries that inlcude the search term
      let strangerEntries =
          entries.filter(entry => entry.user.id != this.props.user.id)
          .filter(entry => entry.content.includes(this.state.searchTerm)
        )
// filter out diary entries that are marked 'private'
      let nonPrivateEntries = strangerEntries.filter(entry => entry.private === false)
// collect IDs of all this user's saved entries
        let savedEntryIDs = [];
        this.props.user.saved_entries.forEach(saved => savedEntryIDs.push(saved.entry.id))

        this.props.setSearchResults(nonPrivateEntries)

        this.setState({
          searchTerm: ''
        })
      }
    })
  }

  render(){
    return(
      <div className="col-xs-4 middle">
          <form className="search-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.searchTerm}
              className="form-control fit"
              placeholder="keyword, ie: 'family', 'anxiety', 'boss'..."
              onChange={this.handleChange}
              ></input>

            <button type="submit" id="search-button" className="btn btn-info btn-lg fit">Search</button>
          </form>
      </div>
    )
  }
}

export default JournalSearchForm
