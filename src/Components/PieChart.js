import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

class PieChart extends Component{
  state={
    showPositive: true
  }
  // state={
  //   data: {
  //     labels: ['at work', 'at home', 'outside', 'with family', 'social'],
  //     datasets: [
  //       {
  //         label: 'Population',
  //         data: [1,3,9,2,1],
  //         backgroundColor: [
  //           'rgba(215,106,58, 1)',
  //           'rgba(215,106,58, .8)',
  //           'rgba(215,106,58, .6)',
  //           'rgba(215,106,58, .4)',
  //           'rgba(215,106,58, .2)']
  //       }
  //     ]
  //   }
  // }

handleChange = () => {
  this.setState({
    showPositive: !this.state.showPositive
  })
}

// renderChartData = () => {
//   if (this.state.showPositiveFeelingsChart) {
//     this.setState({
//       data: this.props.posPieChartData
//     })
//   } else {
//     this.setState({
//       data: this.props.negPieChartData
//     })
//   }
// }

  render(){
    return(
      <div>
        <select onChange={this.handleChange}>
          <option value="positive">Settings of Positive Feelings</option>
          <option value="negative">Settings of Negative Feelings</option>
        </select>
      {this.state.showPositive ?
        <Pie id="pie-chart"
            data={this.props.posPieChartData}

          options={{
            title: {
              display: false,
              text: 'Settings of Positive Feelings',
              fontSize: 20,
              fontColor: 'white'
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
          />
        :
        null
      }
      {!this.state.showPositive ?
        <Pie id="pie-chart"
            data={this.props.negPieChartData}

          options={{
            title: {
              display: false,
              text: 'Settings of Positive Feelings',
              fontSize: 20,
              fontColor: 'white'
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
          />
        :
        null
      }
    </div>
    )
  }
}

export default PieChart
