import React, { Component } from 'react';
import ResultsMaster from './ResultsMaster';
// import JournalSearchForm from './JournalSearchForm';
import SavedSearches from './SavedSearches';

class JournalSearchDisplay extends Component {

  render(){
    return(
      <React.Fragment>
        <div className="container search-body">

          <ResultsMaster
            savedEntryIDs={this.props.savedEntryIDs}
            addSavedEntry={this.props.addSavedEntry}
            deleteSavedEntry={this.props.deleteSavedEntry}
            results={this.props.results}
            user={this.props.user}/>


          <SavedSearches
            user={this.props.user}/>

        </div>
    </React.Fragment>
    )
  }
}

export default JournalSearchDisplay
