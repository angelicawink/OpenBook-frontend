import React, { Component } from 'react';
// import { Redirect } from 'reactx-router-dom';
import MomentForm from './MomentForm';
import EntryForm from './EntryForm';
import Diary from './Diary';
import Chart from './Chart';
import PieChart from './PieChart';

class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      snapshotLogged: false,
      showNewEntryForm: false
    }
  }

  renderSnapshotContents = () => {
    if (this.state.snapshotLogged){
      return (
        <div className="moment-box">
          <img src="https://img.icons8.com/cotton/2x/checkmark.png" alt="checkmark" id="checkmark"/>
          <div><button className="btn btn-default" onClick={this.snapshotLogged}>chart another</button></div>
        </div>
      )
    } else {
      return <MomentForm className="moment-box" addMoment={this.props.addMoment} snapshotLogged={this.snapshotLogged} user={this.props.user}/>
    }
  }

  renderDiaryContents = () => {
    if (!this.state.showNewEntryForm) {
      return <Diary {...this.props} user={this.props.user} entries={this.props.entries} entryLogged={this.entryLogged}/>
    }else {
      return <EntryForm addEntry={this.props.addEntry} user={this.props.user} entryLogged={this.entryLogged}/>
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

  // fetchEntries = () => {
  //   let token = localStorage.getItem('token')
  //   let userID = this.props.user.id
  //
  //   return fetch(`http://localhost:3000/api/v1/users/${userID}/entries`, {
  //     headers: {
  //       "Authorization" : `Bearer ${token}`
  //     }
  //   }).then(res => res.json())
  //   .then(entries => {
  //     this.setState({
  //       entries: entries
  //     })
  //   })
  // }



  render(){
      return this.props.user ? (
        <React.Fragment>
          <div className="home-body">
            <div className="home-container container">
              <div className="box-row row">

                <div className="col-xs-6">
                  <div className="Box-1 top-left">
                      <Chart chartData={this.props.chartData} user={this.props.user}/>
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
                      <div id="vent">
                        <PieChart/>
                    </div>
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
