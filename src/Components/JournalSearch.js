import React, { Component } from 'react';
import JournalSearchDisplay from './JournalSearchDisplay';
import SavedSearches from './SavedSearches';
import JournalSearchForm from './JournalSearchForm'

class JournalSearch extends Component {
  state={
    results: null,
    selectedEntry: null
  }

  setSearchResults = (entries) => {
    this.setState({
      results: entries
    })
  }

  setSelectedEntry = (entry) => {
    this.setState({
      selectedEntry: entry
    })
  }


  render (){
    return(
      <>
        <>

          <h3 className="page-header">
            See what other people are writing about:
          </h3>

          <JournalSearchDisplay addSavedEntry={this.props.addSavedEntry} user={this.props.user} setSearchResults={this.setSearchResults} results={this.state.results} selectedEntry={this.state.selectedEntry} setSelectedEntry={this.setSelectedEntry}/>
        </>

      </>
    )
  }
}

export default JournalSearch
