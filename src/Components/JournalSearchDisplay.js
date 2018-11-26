import React, { Component } from 'react';
import ResultsMaster from './ResultsMaster';

class JournalSearchDisplay extends Component {
  render(){
    return(
      <div>
        <div className="container">
          <ResultsMaster results={this.props.results} setSelectedEntry={(entry) => this.props.setSelectedEntry(entry)}/>
        </div>

        <div className="container">
          <h3>Search Result Detail</h3>
          {this.props.selectedEntry ?
            <>
              <h4>{this.props.selectedEntry.created_at.slice(0,9)}</h4>
              <h5>{this.props.selectedEntry.content}</h5>
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
