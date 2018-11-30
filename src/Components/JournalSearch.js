import React, { Component } from 'react';
import JournalSearchDisplay from './JournalSearchDisplay';

class JournalSearch extends Component {

  render (){
    return(
      <div className="search-body">


          <h3 className="page-header search-header">
            See what other people are writing about:
          </h3>

          <JournalSearchDisplay
            addSavedEntry={this.props.addSavedEntry}
            deleteSavedEntry={this.props.deleteSavedEntry}
            savedEntryIDs={this.props.savedEntryIDs}
            user={this.props.user}
            />


        </div>
    )
  }
}

export default JournalSearch
