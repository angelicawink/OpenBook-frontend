import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MomentForm from './MomentForm';
import EntryForm from './EntryForm';
import Diary from './Diary';
import Chart from './Chart';
import Login from './Login'

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
      return <MomentForm className="moment-box" snapshotLogged={this.snapshotLogged} user={this.props.user}/>
    }
  }

  renderDiaryContents = () => {
    if (!this.state.showNewEntryForm) {
      return <Diary {...this.props} user={this.props.user} entryLogged={this.entryLogged}/>
    }else {
      return <EntryForm user={this.props.user} entryLogged={this.entryLogged}/>
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

  redirectToVent = () => {
    this.props.history.push('/vent');
  }

  render(){
      return (
        <React.Fragment>
        {this.props.user ?
          <div className="home-body">
            <div className="home-container container">
              <div className="box-row row">

                <div className="col-xs-6">
                  <div className="Box-1">
                    <div className="container Box-2">
                      <Chart user={this.props.user}/>
                    </div>
                  </div>
                </div>

                <div className="col-xs-6">
                  <div className="Box-1">
                    <div className="container Box-2">
                      {this.renderSnapshotContents()}
                    </div>
                  </div>

                </div>
              </div>


              <div className="row">

                <div className="col-xs-6">
                  <div className="Box-1">
                    <div className="container Box-2">
                      {this.renderDiaryContents()}
                    </div>
                  </div>
                </div>

                <div className="col-xs-6">
                  <div className="Box-1 vent" onClick={this.redirectToVent}>
                    <div className="container Box-2 vent">
                      <div id="vent">VENT</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          :
          <Login/>
        }
</React.Fragment>
      )

    }
    }


export default Home
