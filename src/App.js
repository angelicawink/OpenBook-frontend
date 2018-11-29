import React, { Component, Fragment } from 'react';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home'
import Vent from './Components/Vent'
import JournalSearch from './Components/JournalSearch'
import { Route, withRouter, Switch } from 'react-router-dom';
import MyNavBar from './Components/MyNavBar'

class App extends Component {
  constructor(){
    super()
    this.state={
      user: null,
      lineChartData: null,
      posPieChartData: null,
      negPieChartData: null
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
      }, () => {
        this.setLineChartData()
        this.setPosPieChartData()
        this.setNegPieChartData()
      })
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
    }, () => {
      this.setLineChartData()
      this.setPosPieChartData()
      this.setNegPieChartData()
    })
  }

  setLineChartData = () => {
    let datesArray = []
    this.state.user.moments.forEach(moment => datesArray.push("Nov " + moment.created_at.slice(8,10)))

    let ranksArray = []
    this.state.user.moments.forEach(moment => ranksArray.push(moment.feeling.rank))

    this.setState({
      lineChartData: {
        labels: datesArray,
        datasets: [
          {

            label: "feelings rank",
            fill: true,
            data: ranksArray,
            backgroundColor: 'rgba(242, 116, 73, .5)',
          }
        ]
      }
    })
  }

  getPositiveMoments = (settingName) => {
    let positiveMomentsCount = this.state.user.moments.filter(moment => moment.setting.name === settingName && moment.feeling.rank >= 6).length;

    return positiveMomentsCount
  }

  getNegativeMoments = (settingName) => {
    let negativeMomentsCount = this.state.user.moments.filter(moment => moment.setting.name === settingName && moment.feeling.rank < 6).length;

    return negativeMomentsCount
  }

  setPosPieChartData = () => {
    let positive_work_moments = this.getPositiveMoments("at work")
    let positive_outdoors_moments = this.getPositiveMoments("outdoors")
    let positive_exercising_moments = this.getPositiveMoments("exercising")
    let positive_downtime_moments = this.getPositiveMoments("downtime")
    let positive_socializing_moments = this.getPositiveMoments("socializing")
    let positive_family_moments = this.getPositiveMoments("with family")
    let positive_significant_other_moments = this.getPositiveMoments("with significant other")
    let positive_other_moments = this.getPositiveMoments("other")

    this.setState({
      posPieChartData: {
        labels: [
          'at work',
          'outdoors',
          'exercising',
          'downtime',
          'socializing',
          'with family',
          'with significant other',
          'other'],
        datasets: [
          {
            label: 'frequency of positive feelings',

            data: [positive_work_moments, positive_outdoors_moments, positive_exercising_moments, positive_downtime_moments, positive_socializing_moments, positive_family_moments, positive_significant_other_moments, positive_other_moments],

            backgroundColor: [
              'rgba(233,111,119, .8)',
              'rgba(244, 232, 109, .8)',
              'rgba(162, 216, 127, .8)',
              'rgba(193, 223, 238, .8)',
              'rgba(242, 116, 73, .7)',
              'rgba(186, 171, 245, .8)',
              'rgba(100, 166, 150, 1)',
              'rgba(245, 245, 245, 1)'
              ]
          }
        ]
      }
    })
  }

  setNegPieChartData = () => {
    let negative_work_moments = this.getNegativeMoments("at work")
    let negative_outdoors_moments = this.getNegativeMoments("outdoors")
    let negative_exercising_moments = this.getNegativeMoments("exercising")
    let negative_downtime_moments = this.getNegativeMoments("downtime")
    let negative_socializing_moments = this.getNegativeMoments("socializing")
    let negative_family_moments = this.getNegativeMoments("with family")
    let negative_significant_other_moments = this.getNegativeMoments("with significant other")

    let negative_other_moments = this.getNegativeMoments("other")

    this.setState({
      negPieChartData: {
        labels: [
          'at work',
          'outdoors',
          'exercising',
          'downtime',
          'socializing',
          'with family',
          'with significant other',
          'other'],
        datasets: [
          {
            label: 'frequency of positive feelings',

            data: [negative_work_moments, negative_outdoors_moments, negative_exercising_moments, negative_downtime_moments, negative_socializing_moments, negative_family_moments, negative_significant_other_moments, negative_other_moments],

            backgroundColor: [
              'rgba(233,111,119, .8)',
              'rgba(244, 232, 109, .8)',
              'rgba(162, 216, 127, .8)',
              'rgba(193, 223, 238, .8)',
              'rgba(242, 116, 73, .7)',
              'rgba(186, 171, 245, .8)',
              'rgba(100, 166, 150, 1)',
              'rgba(245, 245, 245, 1)'
              ]
          }
        ]
      }
    })
  }

  addSavedEntry = (newEntry) => {
    console.log(newEntry)
    this.setState({
      user: {
        ...this.state.user, saved_entries: [...this.state.user.saved_entries, newEntry]
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
            <Route exact path='/home' render={(props) => <Home {...props} addMoment={this.addMoment} lineChartData={this.state.lineChartData} posPieChartData={this.state.posPieChartData} negPieChartData={this.state.negPieChartData} addEntry={this.addEntry} logout={this.logout} user={this.state.user}/>}/>
            <Route exact path='/vent' render={(props) => <Vent {...props} user={this.state.user}/>}/>
            <Route exact path='/search' render={(props) => <JournalSearch {...props} user={this.state.user} addSavedEntry={this.addSavedEntry}/>}/>
          </Switch>
      </Fragment>
    );
  }
}




export default withRouter(App);
