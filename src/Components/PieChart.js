import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

class PieChart extends Component{
  state={
    data: {
      labels: ['at work', 'at home', 'outside', 'with family', 'social'],
      datasets: [
        {
          label: 'Population',
          data: [1,3,9,2,1],
          backgroundColor: [
            'rgba(215,106,58, 1)',
            'rgba(215,106,58, .8)',
            'rgba(215,106,58, .6)',
            'rgba(215,106,58, .4)',
            'rgba(215,106,58, .2)']
        }
      ]
    }
  }
  // rgba(215,106,58, 1)

  render(){
    return(
      <Pie id="pie-chart"
        data={this.state.data}
      />
    )
  }
}

export default PieChart
