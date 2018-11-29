import React, { Component } from 'react';

class ResultstMaster extends Component{
  render(){
    return(
      <>
          <div className="journal-search master">
            {this.props.results ?
              this.props.results.map((result, index) =>

              <h4
                className="search-result-item"
                onClick={(entry) => this.props.setSelectedEntry(result)}
                key={index}>
                {result.created_at.slice(0,9) + " - "} {result.content.slice(0, 85)+'.....'}
              </h4>)

              :
              <h4 id="search-result-placeholder">No Results Yet, Try A Search!</h4>
            }
          </div>
      </>
    )
  }
}

export default ResultstMaster
