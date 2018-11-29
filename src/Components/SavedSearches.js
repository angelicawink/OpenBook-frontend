import React, { Component } from 'react';
import SavedEntry from './SavedEntry';

class SavedSearches extends Component{
  render(){
    
    return this.props.user ? (
      <div className="col-xs-4">
        <div id="holder">
          <h3>My Saved Journal Entries</h3>

          <div className="journal-search saved">
            {this.props.user.saved_entries.map((entry, index) =>
              <SavedEntry key={index} savedEntry={entry}/>
            )}
          </div>

        </div>
      </div>
    ) : null
  }
}

export default SavedSearches
