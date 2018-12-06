import React, { Component } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
// import InlineEdit from 'react-edit-inline';
import EditableLabel from 'react-inline-editing';
import URL from '../helpers'


class SavedEntry extends Component {

    handleFocus = (text) => {
      let savedEntryID = this.props.savedEntry.id
      let token = localStorage.getItem('token');

      console.log('Focused with text: ' + text);

      fetch(`${URL}/saved_entries/${savedEntryID}`, {
        headers: {
           "Content-Type" : "application/json",
          "Accept" : "application/json",
          "Authorization" : `Bearer ${token}`
        }
      }).then(res => res.json()).then(console.log)
    }



    handleFocusOut = (title) => {
        console.log('Left editor with text: ' + title);

      this.fetchUpdateTitle(title)
    }

    fetchUpdateTitle = (newTitle) => {
      let savedEntryID = this.props.savedEntry.id
      let token = localStorage.getItem('token');

      console.log(`fetch updating with ${newTitle}`)

      fetch(`${URL}/saved_entries/${savedEntryID}`, {
        method: "PATCH",
        headers: {
           "Content-Type" : "application/json",
          "Accept" : "application/json",
          "Authorization" : `Bearer ${token}`
        },
        body: JSON.stringify({
          title: newTitle
        })
      }).then(res => res.json()).then(console.log)
    }

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

          <div className="page-header saved-entry">
              <EditableLabel
                id="editable-label"
                text={this.props.savedEntry.title}
                labelClassName='myLabelClass'
                inputClassName='myInputClass'
                inputWidth='150px'
                inputHeight='25px'
                inputMaxLength={50}
                labelFontWeight='bold'
                inputFontWeight='bold'
                onFocus={this.handleFocus}
                onFocusOut={this.handleFocusOut}
                />
          </div>

        </OverlayTrigger>



      </div>
    )
  }
}

export default SavedEntry
