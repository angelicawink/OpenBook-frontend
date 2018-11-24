import React, { Component } from 'react';

class ResultstMaster extends Component{
  render(){
    return(
      <div>
        <h5>Search Result Master</h5>
        {this.props.results ?
          this.props.results.map((result, index) => <h5 onClick={this.props.setSelectedEntry} key={index}>{result.content.slice(0, 100)+'...'}</h5>)
          :
          null
        }
      </div>
    )
  }
}

export default ResultstMaster
