import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import MomentForm from './MomentForm';
import EntryForm from './EntryForm';
import Diary from './Diary';
import Chart from './Chart';
import PieChart from './PieChart';
import NoChart from './NoChart';

class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      snapshotLogged: false,
      showNewEntryForm: false,
      lineChartDatadata: null
    }
  }

  componentDidMount(prevProps){
    this.props.setDatas()
  }

  componentDidUpdate(){
    this.renderChartContents()
  }

  renderSnapshotContents = () => {
    if (this.state.snapshotLogged){
      return (
        <div className="moment-box">
          <img src="https://img.icons8.com/cotton/2x/checkmark.png" alt="checkmark" id="moment-checkmark"/>
          <div><button className="btn btn-default" onClick={this.snapshotLogged}>chart another</button></div>
        </div>
      )
    } else {
      return <MomentForm className="moment-box" addMoment={this.props.addMoment} snapshotLogged={this.snapshotLogged} user={this.props.user}/>
    }
  }

  renderDiaryContents = () => {
    if (this.props.user.entries.length === 0){
      return <EntryForm addEntry={this.props.addEntry} user={this.props.user} entryLogged={this.entryLogged}/>
    }
    else {
      if (!this.state.showNewEntryForm) {
        return <Diary {...this.props} user={this.props.user} entries={this.props.entries} entryLogged={this.entryLogged}/>
      }
      else {
        return <EntryForm addEntry={this.props.addEntry} user={this.props.user} entryLogged={this.entryLogged}/>
      }
    }
  }

  renderChartContents = () => {
    if (this.props.user.moments.length === 0 || !this.props.lineChartData){
      return <img
                src="https://loading.io/spinners/balls/lg.circle-slack-loading-icon.gif"
                alt="loading"
                className="loading"/>
    }
    else {
      return (<Chart lineChartData={this.props.lineChartData} user={this.props.user}/>)
    }
  }

  renderPieChartContents = () => {
    if (this.props.user.moments.length === 0 || !this.props.posPieChartData){
      return <img
                src="https://loading.io/spinners/balls/lg.circle-slack-loading-icon.gif"
                alt="loading"
                className="loading"/>
    }
    else {
      return (<PieChart negPieChartData={this.props.negPieChartData} posPieChartData={this.props.posPieChartData}/>)
    }
  }

  snapshotLogged = () => {
    this.setState({
      snapshotLogged: !this.state.snapshotLogged
    })
  }

  entryLogged = () => {
    this.setState({
      showNewEntryForm: !this.state.showNewEntryForm
    })
  }

  render(){
      return this.props.user ? (
        <React.Fragment>
          <div className="home-body">
            <div className="home-container container">
              <div className="box-row row">

                <div className="col-xs-6">
                  <div className="Box-1 top-left">
                    {this.renderChartContents()}
                  </div>
                </div>

                <div className="col-xs-6">
                  <div className="Box-1 top-right">
                      {this.renderSnapshotContents()}
                  </div>

                </div>
              </div>


              <div className="row">

                <div className="col-xs-6">
                  <div className="Box-1 bottom-left">
                      {this.renderDiaryContents()}
                  </div>
                </div>

                <div className="col-xs-6">
                  <div className="Box-1 bottom-right">
                    {this.renderPieChartContents()}
                  </div>
                </div>

              </div>
            </div>
          </div>
</React.Fragment>
) : null

    }
    }


export default Home
