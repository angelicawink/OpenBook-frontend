import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MomentForm from './MomentForm'
import EntryForm from './EntryForm'

class Home extends Component {
  state={
    snapshotLogged: false
  }

  componentDidMount(){
    if (this.props.userID){
      this.props.fetchEntries()
    }
  }

  renderContents = () => {
    if (this.state.snapshotLogged){
      return <img src="https://img.icons8.com/cotton/2x/checkmark.png" alt="checkmark" id="checkmark"/>
    } else {
      return <MomentForm snapshotLogged={this.snapshotLogged} userID={this.props.userID}/>
    }
  }

  snapshotLogged = () => {
    this.setState({
      snapshotLogged: true
    })
  }

  render(){
    if (!this.props.userID){
      return <Redirect push to={'/'}/>
    }else {
      return(
        <div className="home-body">
          <div className="home-container container">
            <div className="box-row row">

                <div className="col-xs-6">
                  <div className="Box-1">
                    <div className="container Box-2">
                    </div>
                  </div>
                </div>

                <div className="col-xs-6">
                  <div className="Box-1">
                    <div className="container Box-2">
                      {this.renderContents()}
                    </div>
                  </div>

                </div>
            </div>


            <div className="row">

                <div className="col-xs-6">
                  <div className="Box-1">
                    <div className="container Box-2">
                      <EntryForm/>
                    </div>
                  </div>
                </div>

                <div className="col-xs-6">
                  <div className="Box-1">
                    <div className="container Box-2">
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
