import React, { Component } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';


class ResultstMaster extends Component{

  handleClick = (event) => {
    let entryID = event.target.dataset.entryid;
    let userID = this.props.user.id;
    let token = localStorage.getItem('token');
    let titleInput = "Click To Add Title"

    fetch(`http://localhost:3000/api/v1/saved_entries`, {
      method: "POST",
      headers: {
         "Content-Type" : "application/json",
        "Accept" : "application/json",
        "Authorization" : `Bearer ${token}`
      },
      body: JSON.stringify({
        user_id: userID,
        entry_id: entryID,
        title: titleInput
      })
    }).then(res => res.json()).then(entry => this.props.addSavedEntry(entry))

  }

  render(){
    console.log(this.props.user)
    const popoverClick = (
      <Popover id="popover-trigger-focus" title={this.props.selectedEntry ? this.props.selectedEntry.created_at.slice(0,9) : null}>
        <strong>
          {this.props.selectedEntry ? this.props.selectedEntry.content : null}
        </strong>
      </Popover>
    )

    return(
      <div className="col-xs-4">

          <div className="journal-search master">

            {this.props.results ?
              this.props.results.map((result, index) =>

                <OverlayTrigger key={index} trigger={['hover', 'click']} placement="right" overlay={popoverClick}>
                  <h4
                    data-entryid={result.id}
                    className="search-result-item"
                    onMouseOver={(entry) => this.props.setSelectedEntry(result)}
                    key={index}>

                      <img
                        onClick={this.handleClick}
                        id="bookmark"
                        data-entryid={result.id}
                        src="http://www.iconsalot.com/asset/icons/dinosoftlabs/education-3/512/101-bookmark-icon.png" alt="bookmark icon"/>


                  {result.created_at.slice(0,9) + " - "} {result.content.slice(0, 60)+'.....'}

                </h4>
              </OverlayTrigger>

              )
              :
              <h4 id="search-result-placeholder">No Results Yet, Try A Search!</h4>
            }
          </div>
      </div>
    )
  }
}

export default ResultstMaster

                  // {result.created_at.slice(0,9) + " - "} {result.content.slice(0, 60)+'.....'}
