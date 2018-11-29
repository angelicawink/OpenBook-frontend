import React, { Component } from 'react';
import ResultsMaster from './ResultsMaster';
import JournalSearchForm from './JournalSearchForm';
import SavedSearches from './SavedSearches';

class JournalSearchDisplay extends Component {
  render(){
    return(
      <>
        <ResultsMaster addSavedEntry={this.props.addSavedEntry} results={this.props.results} user={this.props.user} selectedEntry={this.props.selectedEntry} setSelectedEntry={(entry) => this.props.setSelectedEntry(entry)}/>
        <JournalSearchForm user={this.props.user} setSearchResults={this.props.setSearchResults}/>
        <SavedSearches user={this.props.user}/>
    </>
    )
  }
}

export default JournalSearchDisplay
