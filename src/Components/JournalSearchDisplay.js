import React, { Component } from 'react';
import ResultsMaster from './ResultsMaster';
// import JournalSearchForm from './JournalSearchForm';
import SavedSearches from './SavedSearches';

class JournalSearchDisplay extends Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     results: null
  //   }
  // }
  //
  //   setSearchResults = (entries) => {
  //     this.setState({
  //       results: entries
  //     })
  //   }

    // componentDidMount(){
    //   let token = localStorage.getItem('token')
    //   fetch(`http://localhost:3000/api/v1/entries`, {
    //     headers: {
    //       "Authorization" : `Bearer ${token}`
    //     }
    //   })
    //   .then(res => res.json())
    //   .then(entries => {
    //
    //     let publicEntries = entries.filter(entry => entry.private == false)
    //
    //     this.setState({
    //       results: publicEntries
    //     })
    //   }
    // )
    // }

  render(){
    return(
      <React.Fragment>
        <div className="container search-body">

          <ResultsMaster
            savedEntryIDs={this.props.savedEntryIDs}
            addSavedEntry={this.props.addSavedEntry}
            deleteSavedEntry={this.props.deleteSavedEntry}
            results={this.props.results}
            user={this.props.user}/>


          <SavedSearches
            user={this.props.user}/>

        </div>
    </React.Fragment>
    )
  }
}

export default JournalSearchDisplay

  // <JournalSearchForm
  //   user={this.props.user}
  //   setSearchResults={this.setSearchResults}/>
