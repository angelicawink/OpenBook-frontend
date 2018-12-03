import React, { Component } from 'react';

class NoChart extends Component {
  render(){
    return(
      <div>
        <p>No Data Yet :/ Try logging some feelings!</p>
        <img
          alt="no chart"
          id="no-chart"
          src="https://image.flaticon.com/icons/png/512/548/548135.png"/>
      </div>
    )
  }
}

export default NoChart
