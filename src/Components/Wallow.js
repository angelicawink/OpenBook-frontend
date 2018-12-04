import React, { Component } from 'react';

class Wallow extends Component {
  render(){
    return(
      <div className="container poetry">
        <div>
          {this.props.user ?
            this.props.user.poems.map(poem => <h3>{poem.title}</h3>):null}
        </div>
      </div>
    )
  }
}

export default Wallow
