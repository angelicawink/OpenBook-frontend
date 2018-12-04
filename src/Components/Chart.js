import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends Component {

  render(){

    return(
      <div className="chart">
        {this.props.lineChartData  ?
          <Line
          data={this.props.lineChartData}

          options={{
            elements: {
              point: {
                radius: 0
              }
            },
              scales: {
              xAxes: [{
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 5,
                  fontColor: 'white'
                }
              }],
              yAxes: [{
                ticks: {
                  fontColor: 'white',
                  beginAtZero: true,
                  callback: function(label, index, labels) {
        switch (label) {
            case 1:
                return 'absolutely horrible';
            case 2:
                return 'terrible';
            case 3:
                return 'very bad';
            case 4:
                return 'bad';
            case 5:
                return 'a bit off';
            case 6:
                return 'okay';
            case 7:
                return 'good';
            case 8:
                return 'very good';
            case 9:
                return 'great';
            case 10:
                return 'excellent';
            case 11:
                return 'absolutely amazing';
            default:
              return ""
        }
    }
                }
              }]
            },
            title: {
              display: true,
              text: 'Feelings Rollercoaster',
              fontSize: 25,
              fontColor: 'white'
            },
            legend: {
              display: false
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

export default Chart
