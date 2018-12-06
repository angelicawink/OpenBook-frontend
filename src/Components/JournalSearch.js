import React, { Component } from 'react';
import JournalSearchDisplay from './JournalSearchDisplay';
import JournalSearchForm from './JournalSearchForm';
import URL from '../helpers'


class JournalSearch extends Component {
  constructor(props){
    super(props);
    this.state={
      results: null
    }
  }

    setSearchResults = (entries) => {
      this.setState({
        results: entries
      })
    }

    componentDidMount(){
      let token = localStorage.getItem('token')
      fetch(`${URL}/entries`, {
        headers: {
          "Authorization" : `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(entries => {

        let publicEntries = entries.filter(entry => entry.private == false)

        this.setState({
          results: publicEntries
        })
      }
    )
    }

  render (){
    return(
      <div className="search-body">


          <div className="search-header">
            See what other people are writing about:

             <JournalSearchForm
              user={this.props.user}
              setSearchResults={this.setSearchResults}/>

          </div>

          <JournalSearchDisplay
            results={this.state.results}
            addSavedEntry={this.props.addSavedEntry}
            deleteSavedEntry={this.props.deleteSavedEntry}
            savedEntryIDs={this.props.savedEntryIDs}
            user={this.props.user}
            />


        </div>
    )
  }
}

export default JournalSearch
