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
      <div className="col-xs-4">

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
    )
  }
}

export default ResultstMaster


// <OverlayTrigger
//   key={index}
//   trigger={['hover', 'click']}
//   placement="right"
//   overlay={popoverClick}
//   >
//
//   <h4
//     data-entryid={result.id}
//     className="search-result-item"
//     onMouseOver={(entry) => this.props.setSelectedEntry(result)}
//     key={index}
//     >
//
//       <img
//         onClick={this.handleClick}
//         id="bookmark"
//         data-entryid={result.id}
//         src="http://www.iconsalot.com/asset/icons/dinosoftlabs/education-3/512/101-bookmark-icon.png"
//         alt="bookmark icon"
//         />
//
//
//   {result.created_at.slice(0,9) + " - "} {result.content.slice(0, 60)+'.....'}
//
// </h4>
// </OverlayTrigger>


                  // {result.created_at.slice(0,9) + " - "} {result.content.slice(0, 60)+'.....'}
