import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home'
import Vent from './Components/Vent'
import JournalSearch from './Components/JounralSearch'
import { BrowserRouter as Router, Route} from 'react-router-dom';
// import { connect } from 'react-redux';
// import { fetchedUser } from './actions/openBookActions'


    // TO DO :
    //  - neeed to make an actual Result Detail component, for line 14 ^, probably display the entry's date as well
    // - make MY past journal entries searchable by date
    // - add "back to home" button from Journal Search page

class App extends Component {
  state={
    user: null
  }

  handleLogin = (event) => {
    event.preventDefault()
    let username = event.target.children[0].children[0].value

    fetch('http://localhost:3000/api/v1/login', {
      method: "POST",
        headers: {
          "Content-Type" : "application/json",
          "Accept" : "application/json"
        },
        body: JSON.stringify({
          name: username
        })
    }).then(res => res.json())
    .then(data => {
      this.setState({
        user: data
      })
    })
  }


  render() {
    return (
      <div>
        <Router>
          <React.Fragment>
            <Route exact path='/' render={(props) => <Login {...props} user={this.state.user} handleLogin={this.handleLogin} />}/>
            <Route exact path='/home' render={(props) => <Home {...props} user={this.state.user}/>}/>
            <Route exact path='/vent' render={(props) => <Vent {...props} user={this.state.user}/>}/>
            <Route exact path='/search' render={(props) => <JournalSearch {...props} user={this.state.user}/>}/>

        </React.Fragment>
        </Router>
      </div>
    );
  }
}


export default App;
