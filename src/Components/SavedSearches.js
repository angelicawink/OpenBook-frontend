import React, { Component } from 'react';
import SavedEntry from './SavedEntry';

class SavedSearches extends Component{
  render(){
    console.log(this.props)
    return this.props.user ? (
      <div className="col-xs-6 search">
        <div id="holder" className="right">
          <h3>My Saved Journals</h3>

          <div className="journal-search saved">
            {this.props.user.saved_entries.map(entry =>
              <SavedEntry
                key={entry.id}
                savedEntry={entry}
                user={this.props.user}
                />
            )}
          </div>

        </div>
      </div>
    ) : null
  }
}

export default SavedSearches
