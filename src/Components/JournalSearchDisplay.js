import React, { Component } from 'react';
import ResultsMaster from './ResultsMaster';
import SavedSearches from './SavedSearches';

class JournalSearchDisplay extends Component {
  render(){
    return(
      <>
          <ResultsMaster results={this.props.results} selectedEntry={this.props.selectedEntry} setSelectedEntry={(entry) => this.props.setSelectedEntry(entry)}/>
          <SavedSearches/>
    </>
    )
  }
}

export default JournalSearchDisplay
