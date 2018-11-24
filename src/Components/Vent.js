import React, { Component } from 'react';

class Vent extends Component {

  redirectToHome = () => {
    this.props.history.push(`/home`)
  }

  render(){
    return(
      <div>
        <button className="btn btn-success" onClick={this.redirectToHome}>Home</button>
      </div>
    )
  }
}

export default Vent
