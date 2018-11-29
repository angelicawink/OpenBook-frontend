import React, { Component } from 'react';
import { OverlayTrigger, Popover, Button } from 'react-bootstrap';


class SavedEntry extends Component {
  render(){

    const popoverClick = (
      <Popover id="popover-trigger-focus" title={this.props.selectedEntry ? this.props.selectedEntry.created_at.slice(0,9) : null}>
        <strong>
          {this.props.savedEntry.entry.content}
        </strong>
      </Popover>
    )

    return(
      <div className="saved-div">

        <OverlayTrigger trigger={['hover', 'click']} placement="left" overlay={popoverClick}>
          <div
            className="page-header saved-entry">
              {this.props.savedEntry.title}
          </div>
        </OverlayTrigger>

      </div>
    )
  }
}

export default SavedEntry
