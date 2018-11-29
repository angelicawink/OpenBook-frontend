import React, { Component } from 'react';
import ResultsMaster from './ResultsMaster';

class JournalSearchDisplay extends Component {
  render(){
    return(
      <div>
          <ResultsMaster results={this.props.results} setSelectedEntry={(entry) => this.props.setSelectedEntry(entry)}/>


          <div className="journal-search detail">
            {this.props.selectedEntry ?
              <>
                <h2 className="journal-detail">{this.props.selectedEntry.created_at.slice(0,9)}</h2>
                <h3 className="journal-detail">{this.props.selectedEntry.content}</h3>
              </>
              :
              null
            }
          </div>
      </div>
    )
  }
}

export default JournalSearchDisplay
