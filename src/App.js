import React, { Component, Fragment } from 'react';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home'
import Vent from './Components/Vent'
import JournalSearch from './Components/JounralSearch'
import { Route, withRouter, Switch } from 'react-router-dom';
import MyNavBar from './Components/MyNavBar'

    // TO DO :
    // - make MY past journal entries searchable by date
    // - add profile page?

class App extends Component {
  constructor(){
    super()
    this.state={
      user: null,
      chartData: null
    }
  }

  componentDidMount(){
    let token = localStorage.getItem('token')

    if (token)
      fetch(`http://localhost:3000/api/v1/home`, {
        headers: {
          "Authorization" : `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => this.setState({
        user: data.user
      }, () => this.setChartData())
    )
  }

  setUser = (userInfo) => {
    console.log(userInfo)
    this.setState({
      user: userInfo
    }, () => this.props.history.push('/home'))
  }

  logout = () => {
   localStorage.clear()
   this.setState({user: null})
   this.props.history.push('/')
  }

  toVent = () => {
    this.props.history.push('/vent');
  }

  toSearch = () => {
    this.props.history.push('/search');
  }

  addEntry = (newEntry) => {
    this.setState({
      user: {...this.state.user, entries: [...this.state.user.entries, newEntry]}
    })
  }

  addMoment = (newMoment) => {
    this.setState({
      user: {...this.state.user, moments: [...this.state.user.moments, newMoment]}
    }, () => this.setChartData())
  }

  setChartData = () => {
    let datesArray = []
    this.state.user.moments.forEach(moment => datesArray.push("Nov " + moment.created_at.slice(8,10)))

    let ranksArray = []
    this.state.user.moments.forEach(moment => ranksArray.push(moment.feeling.rank))

    this.setState({
      chartData: {
        labels: datesArray,
        datasets: [
          {
            label: "feelings rank",
            data: ranksArray,
            backgroundColor: 'rgba(106, 194, 139, .9)'
          }
        ]
      }
    })
  }

  render() {
    return (
      <Fragment>
        {this.state.user ?
          <MyNavBar logout={this.logout} toVent={this.toVent} toSearch={this.toSearch}/>
          :
          null
        }
          <Switch>
            <Route exact path='/' render={(props) => <Login {...props} user={this.state.user} setUser={this.setUser}/>}/>
            <Route exact path='/home' render={(props) => <Home {...props} addMoment={this.addMoment} chartData={this.state.chartData} addEntry={this.addEntry} logout={this.logout} user={this.state.user}/>}/>
            <Route exact path='/vent' render={(props) => <Vent {...props} user={this.state.user}/>}/>
            <Route exact path='/search' render={(props) => <JournalSearch {...props} user={this.state.user}/>}/>
          </Switch>
      </Fragment>
    );
  }
}




export default withRouter(App);
