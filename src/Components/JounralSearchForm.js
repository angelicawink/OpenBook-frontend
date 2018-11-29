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
      console.log(entries)
      if (this.props.user){

        let strangerEntries = entries.filter(entry => entry.user.id !== this.props.user.id).filter(entry => entry.content.includes(this.state.searchTerm))

        this.props.setSearchResults(strangerEntries)

        this.setState({
          searchTerm: ''
        })
      }
    })
  }

  render(){
    return(
      <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.searchTerm}
              className="form-control"
              placeholder="keyword, ie: 'family', 'anxiety', 'boss'..."
              onChange={this.handleChange}
              ></input>

            <button type="submit" className="btn btn-warning btn-lg">Search</button>
          </form>
      </div>
    )
  }
}

export default JournalSearchForm
