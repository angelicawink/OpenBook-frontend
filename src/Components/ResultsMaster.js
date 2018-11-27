import React, { Component } from 'react';

class ResultstMaster extends Component{
  render(){
    return(
      <div>
        <h5>Search Result Master</h5>
        {this.props.results ?
          this.props.results.map((result, index) => <h5 onClick={(entry) => this.props.setSelectedEntry(result)} key={index}>{result.created_at.slice(0,9)} {result.content.slice(0, 85)+'...'}</h5>)
          :
          null
        }
      </div>
    )
  }
}

export default ResultstMaster
