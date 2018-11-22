import React, { Component } from 'react';

class EntryForm extends Component {
  render(){
    return(
      <>
        <form>

          <div className="form-group new-entry-container">
            <label>Today's Date</label>
            <textarea className="form-control" id="new-diary-entry"></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </>
    )
  }
}

export default EntryForm
