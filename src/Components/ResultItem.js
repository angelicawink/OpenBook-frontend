import React, { Component } from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";

class ResultItem extends Component {
  renderIcon = () => {
    let bookmark = "https://png.pngtree.com/svg/20161212/bookmark_1066239.png";
    let checkmark =
      "https://storage.needpix.com/rsynced_images/yes-2419247_1280.png";

    if (this.props.saved) {
      return checkmark;
    } else {
      return bookmark;
    }
  };

  renderID = () => {
    if (this.props.saved) {
      return "checkmark";
    } else {
      return "bookmark";
    }
  };

  render() {
    const popoverClick = (
      <Popover
        id="popover-trigger-focus"
        title={
          this.props.selectedEntry
            ? this.props.selectedEntry.created_at.slice(5, 10).concat("-2018")
            : null
        }
      >
        <strong>
          {this.props.selectedEntry ? this.props.selectedEntry.content : null}
        </strong>
      </Popover>
    );

    return (
      <>
        <OverlayTrigger
          trigger={["hover", "click"]}
          placement="right"
          overlay={popoverClick}
        >
          <h4
            data-entryid={this.props.result.id}
            className="search-result-item"
            onMouseOver={entry =>
              this.props.setSelectedEntry(this.props.result)
            }
          >
            <img
              onClick={this.props.handleClick}
              id={this.renderID()}
              data-entryid={this.props.result.id}
              src={this.renderIcon()}
              alt="bookmark icon"
            />

            {this.props.result.content.slice(0, 60) + "....."}
          </h4>
        </OverlayTrigger>
      </>
    );
  }
}

export default ResultItem;
