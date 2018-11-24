import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MomentForm from './MomentForm';
import EntryForm from './EntryForm';
import Diary from './Diary';

class Home extends Component {
  state={
    snapshotLogged: false,
    showNewEntryForm: false,
    vent: false
  }

  renderSnapshotContents = () => {
    if (this.state.snapshotLogged){
      return <img src="https://img.icons8.com/cotton/2x/checkmark.png" alt="checkmark" id="checkmark"/>
    } else {
      return <MomentForm snapshotLogged={this.snapshotLogged} user={this.props.user}/>
    }
  }

  renderDiaryContents = () => {
    if (!this.state.showNewEntryForm) {
      return <Diary user={this.props.user} entryLogged={this.entryLogged}/>
    }else {
      return <EntryForm user={this.props.user} entryLogged={this.entryLogged}/>
    }
  }

  snapshotLogged = () => {
    this.setState({
      snapshotLogged: true
    })
  }

  entryLogged = () => {

    this.setState({
      showNewEntryForm: !this.state.showNewEntryForm
    })
  }

  redirectToVent = () => {
    this.setState({
      vent: true
    })
  }

  render(){
    if (!this.props.user){
      return <Redirect push to={'/'}/>
    }else if (this.state.vent) {
      return <Redirect push to={'/vent'}/>
    } else  {
      return(
        <div className="home-body">
          <div className="home-container container">
            <div className="box-row row">

                <div className="col-xs-6">
                  <div className="Box-1">
                    <div className="container Box-2">
                      Chart of Moments!!!!
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
                      <h3>JOURNAL</h3>
                      {this.renderDiaryContents()}
                    </div>
                  </div>
                </div>

                <div className="col-xs-6">
                  <div className="Box-1 vent">
                    <div className="container Box-2 vent">
                      <div id="vent" onClick={this.redirectToVent}>VENT</div>
                    </div>
                  </div>
                </div>

            </div>
        </div>
      </div>
      )
    }
  }
}

export default Home
