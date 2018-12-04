import React, { Component, Fragment } from 'react';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home'
import Vent from './Components/Vent'
import JournalSearch from './Components/JournalSearch'
import { Route, withRouter, Switch } from 'react-router-dom';
import MyNavBar from './Components/MyNavBar';
// import { fetchVerifyUser } from './FETCHES'
import { chartLabels, pieChartColors } from './data'

class App extends Component {
  constructor(){
    super()
    this.state={
      user: null,
      lineChartData: null,
      posPieChartData: null,
      negPieChartData: null,
      savedEntryIDs: []
    }
  }

  setDatas = () => {
    this.getLineChartData()
    this.getPosPieChartData()
    this.getNegPieChartData()
    this.getSavedEntryIDs()
    }

  getSavedEntryIDs = () => {
    let savedIDs = [];
    this.state.user.saved_entries.forEach(saved => {
      savedIDs.push(saved.entry.id)})

    this.setSavedEntryIDs(savedIDs)
  }

  setSavedEntryIDs = (savedIDs) => {
    this.setState({
      savedEntryIDs: savedIDs
    })
  }

  setUser = (userInfo) => {
    this.setState({
      user: userInfo
    }, () => this.props.history.push('/home'))
  }

  logout = () => {

   localStorage.clear()
   this.setState({
     user: null,
     lineChartData: null,
     posPieChartData: null,
     negPieChartData: null,
     savedEntryIDs: []
   })
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
      user: {...this.state.user,
        entries: [...this.state.user.entries, newEntry]}
    })
  }

  addMoment = (newMoment) => {
    this.setState({
      user: {...this.state.user,
        moments: [...this.state.user.moments, newMoment]}
    }, () => {
      this.getLineChartData()
      this.getPosPieChartData()
      this.getNegPieChartData()
    })
  }

  getLineChartData = () => {
    let datesArray = []
    this.state.user.moments.forEach(moment => datesArray.push("Nov " + moment.created_at.slice(8,10)))
    let ranksArray = []
    this.state.user.moments.forEach(moment => ranksArray.push(moment.feeling.rank))
    this.setLineChartData(datesArray, ranksArray)
  }


  setLineChartData = (dates, ranks) => {
    this.setState({
      lineChartData: {
        labels: dates,
        datasets: [
          {
            label: "feelings rank",
            fill: true,
            data: ranks,
            backgroundColor: 'rgba(230, 87, 127, 1)',
          }]
      }})}

  getPositiveMoments = (settingName) => {
    let positiveMomentsCount = this.state.user.moments.filter(moment => moment.setting.name === settingName && moment.feeling.rank >= 6).length;
    return positiveMomentsCount
  }

  getNegativeMoments = (settingName) => {
    let negativeMomentsCount = this.state.user.moments.filter(moment => moment.setting.name === settingName && moment.feeling.rank < 6).length;
    return negativeMomentsCount
  }

  getPosPieChartData = () => {
    let work = this.getPositiveMoments("at work")
    let outdoors = this.getPositiveMoments("outdoors")
    let exercise = this.getPositiveMoments("exercising")
    let downtime = this.getPositiveMoments("downtime")
    let socializing = this.getPositiveMoments("socializing")
    let family = this.getPositiveMoments("with family")
    let signifcant_other = this.getPositiveMoments("with significant other")
    let other = this.getPositiveMoments("other")

    let ranks = [];
    ranks.push(work, outdoors, exercise, downtime, socializing, family, signifcant_other, other)
    this.setPosPieChartData(ranks)
  }

  setPosPieChartData = (data) => {
    this.setState({
      posPieChartData: {
        labels: chartLabels,
          datasets: [
            {
              data: data,
              backgroundColor: pieChartColors
            }]
        }})}


  getNegPieChartData = () => {
    let work = this.getNegativeMoments("at work")
    let outdoors = this.getNegativeMoments("outdoors")
    let exercise = this.getNegativeMoments("exercising")
    let downtime = this.getNegativeMoments("downtime")
    let socializing = this.getNegativeMoments("socializing")
    let family = this.getNegativeMoments("with family")
    let signifcant_other = this.getNegativeMoments("with significant other")
    let other = this.getNegativeMoments("other")
    let ranks = [];
    ranks.push(work, outdoors, exercise, downtime, socializing, family, signifcant_other, other)
    this.setNegPieChartData(ranks)
  }


  setNegPieChartData = (data) => {
    this.setState({
      negPieChartData: {
        labels: chartLabels,
        datasets: [
          {
            data: data,
              backgroundColor: pieChartColors
          }]
      }})}


  addSavedEntry = (newEntry) => {
    this.setState({
      user: {
        ...this.state.user,
        saved_entries: [...this.state.user.saved_entries, newEntry],
      },
      savedEntryIDs: [...this.state.savedEntryIDs, newEntry.entry.id]
    })
  }

  deleteSavedEntry = (savedEntry) => {
    let objIndex = this.state.user.saved_entries.findIndex(saved => saved.id == savedEntry.id)
    let id_index = this.state.savedEntryIDs.findIndex(id => id === savedEntry.entry.id)
    this.setState({
      user: {
        ...this.state.user,
        saved_entries: [...this.state.user.saved_entries.slice(0, objIndex), ...this.state.user.saved_entries.slice(objIndex+1)]
      },
      savedEntryIDs: [...this.state.savedEntryIDs.slice(0, id_index), ...this.state.savedEntryIDs.slice(id_index+1)]
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
            <Route exact path='/' render={(props) =>
                <Login {...props}
                  user={this.state.user}
                  setUser={this.setUser}/>}/>

            <Route exact path='/home' render={(props) =>
                <Home {...props}
                  addMoment={this.addMoment}
                  mount={this.componentDidMount}
                  getLineChartData={this.getLineChartData}
                  getPosPieChartData={this.getPosPieChartData}
                  getNegPieChartData={this.getNegPieChartData}
                  getSavedEntryIDs={this.getSavedEntryIDs}
                  lineChartData={this.state.lineChartData}
                  posPieChartData={this.state.posPieChartData}
                  negPieChartData={this.state.negPieChartData}
                  addEntry={this.addEntry}
                  logout={this.logout}
                  setDatas={this.setDatas}
                  user={this.state.user}/>}/>

            <Route exact path='/vent' render={(props) =>
                <Vent {...props}
                  user={this.state.user}/>}/>

            <Route exact path='/search' render={(props) =>
                <JournalSearch {...props}
                  user={this.state.user}
                  savedEntryIDs={this.state.savedEntryIDs}
                  deleteSavedEntry={this.deleteSavedEntry}
                  addSavedEntry={this.addSavedEntry}/>}/>
          </Switch>
      </Fragment>
    );
  }
}

export default withRouter(App);
