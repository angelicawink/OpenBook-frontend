import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home'
import { BrowserRouter as Router, Route} from 'react-router-dom';


class App extends Component {
  state={
    userID: null
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
    }).then(res => res.text())
    .then(data => {
      if (!isNaN(data)){
        this.setState({
          userID: data
        })
      } else {
        alert('Wrong username')
      }
    })
  }

  fetchEntries = () => {

    fetch(`http://localhost:3000/api/v1/users/${this.state.userID}`)
    .then(res => res.json())
    .then(entries => console.log(entries))
  }

  render() {
    return (
      <div>
        <Router>
          <React.Fragment>
            <Route exact path='/' render={(props) => <Login {...props} userID={this.state.userID} handleLogin={this.handleLogin} />}/>
            <Route exact path='/home' render={(props) => <Home {...props} currentUserID={this.state.userID} fetchEntries={this.fetchEntries}/>}/>
        </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
