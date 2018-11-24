import React, { Component } from 'react';
import ResultsMaster from './ResultsMaster';

class JournalSearchDisplay extends Component {
  render(){
    return(
      <div>
        <div className="container">
          <ResultsMaster results={this.props.results} setSelectedEntry={this.props.setSelectedEntry}/>
        </div>

        <div className="container">
          <h3>Search Result Detail</h3>
          <h5>{this.props.selectedEntry}</h5>
          //
          //
          //
          //
          // neeed to make an actual Result Detail component, for line 14 ^, probably display the entry's date as well

        </div>
      </div>
    )
  }
}

export default JournalSearchDisplay
