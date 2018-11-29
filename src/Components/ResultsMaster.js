import React, { Component } from 'react';
import { OverlayTrigger, Popover, Button } from 'react-bootstrap';


class ResultstMaster extends Component{



  render(){

    const popoverClick = (
      <Popover id="popover-trigger-focus" title={this.props.selectedEntry ? this.props.selectedEntry.created_at.slice(0,9) : null}>
        <strong>
          {this.props.selectedEntry ? this.props.selectedEntry.content : null}
        </strong>
      </Popover>
    )

    return(
      <>

          <div className="journal-search master">

            {this.props.results ?
              this.props.results.map((result, index) =>

              <OverlayTrigger key={index} trigger={['hover', 'click']} placement="right" overlay={popoverClick}>
                <h4
                  className="search-result-item"
                  onMouseOver={(entry) => this.props.setSelectedEntry(result)}
                  key={index}>
                  {result.created_at.slice(0,9) + " - "} {result.content.slice(0, 60)+'.....'}
                </h4>
              </OverlayTrigger>)

              :
              <h4 id="search-result-placeholder">No Results Yet, Try A Search!</h4>
            }
          </div>
      </>
    )
  }
}

export default ResultstMaster
