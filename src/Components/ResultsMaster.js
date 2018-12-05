import React, { Component } from 'react';
import ResultItem from './ResultItem';

class ResultstMaster extends Component{
  constructor(props){
    super(props);
    this.state={
      selectedEntry: null
    }
  }

  setSelectedEntry = (entry) => {
    this.setState({
      selectedEntry: entry
    })
  }

  handleClick = (event) => {
    console.log(this.props.savedEntryIDs)

    let entryID = ~~(event.target.dataset.entryid);
    let userID = this.props.user.id;
    let token = localStorage.getItem('token');
    let titleInput = "Click To Add Title"

    if (this.props.savedEntryIDs.includes(entryID)){
      let savedObj = this.props.user.saved_entries.find(saved => saved.entry.id == entryID)
      let savedID = savedObj.id

      fetch(`http://localhost:3000/api/v1/saved_entries/${savedID}`, {
          method: "DELETE",
          headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json",
            "Authorization" : `Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.g0U5SAOLozk3dz0mNUrvBSR-0CSewJ5eParRWg_abVk`
          }
        }).then(res => res.json()).then(savedObj => this.props.deleteSavedEntry(savedObj))
    }
    else {
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
  }


  render(){


    return(
      <div className="col-xs-6 search">
        <div id="holder" className="left">
          <h3 className="results-header">All Journals</h3>

          <div className="journal-search master">

            {this.props.results ?
              this.props.results.map((result, index) =>

              <ResultItem
                savedEntryIDs={this.props.savedEntryIDs}
                key={index}
                result={result}
                user={this.props.user}
                handleClick={this.handleClick}
                saved={this.props.savedEntryIDs.includes(result.id)}
                selectedEntry={this.state.selectedEntry}
                setSelectedEntry={(entry) => this.setSelectedEntry(entry)}
                />

              )
              :
              <h4 id="search-result-placeholder">No Results Yet, Try A Search!</h4>
            }
          </div>
          </div>
      </div>
    )
  }
}

export default ResultstMaster
