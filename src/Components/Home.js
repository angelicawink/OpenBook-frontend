import React, { Component } from 'react';

class Home extends Component {

  componentDidMount(){
    this.props.fetchEntries()
  }

  render(){
    return(
      <div>Home page.</div>
    )
  }
}

export default Home
