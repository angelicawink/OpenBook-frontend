import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {

  state = {}

  //   chartData: {
  //     labels: ['boston', 'worcester', 'springfield', 'lowell', 'cambridge', 'new bedford'],
  //     datasets: [
  //       {
  //         label: "population",
  //         data: [
  //           617594,
  //           123456,
  //           433567,
  //           34566,
  //           987654,
  //           34567
  //         ],
  //         backgroundColor: [
  //           'rgba(25, 99, 130, 0.6)',
  //           'rgba(225, 190, 32, 0.6)',
  //           'rgba(45, 99, 132, 0.6)',
  //           'rgba(65, 91, 132, 0.6)',
  //           'rgba(225, 99, 152, 0.6)',
  //           'rgba(125, 99, 132, 0.6)',
  //           'rgba(11, 92, 102, 0.6)'
  //         ]
  //       }
  //     ]
  //   }
  // }

  componentDidMount(){
    let datesArray = []
    this.props.user.moments.forEach(moment => datesArray.push(moment.created_at.slice(0,9)))

    let ranksArray = []
    this.props.user.moments.forEach(moment => ranksArray.push(moment.feeling.rank))

    this.setState({
      chartData: {
        labels: datesArray,
        datasets: [
          {
            label: "feelings rank",
            data: ranksArray,
            backgroundColor: 'rgba(106, 194, 139, 1)'
          }
        ]
      }
    })
  }


  // setChartData = () => {
  //   console.log(this.props.user.moments)
  //
  //   let datesArray = []
  //   this.props.user.moments.forEach(moment => datesArray.push(moment.created_at.slice(0,9)))
  //
  //   let ranksArray = []
  //   this.props.user.moments.forEach(moment => ranksArray.push(moment.feeling.rank))
  //
  //   console.log(datesArray)
  //   console.log(ranksArray)
  // }

  render(){
    return(
      <div className="chart">
        {this.state.chartData ?
          <Line
          data={this.state.chartData}

          options={{
            title: {
              display: true,
              text: 'Feelings Rollercoaster',
              fontSize: 20
            },
            legend: {
              display: false,
              position: 'left'
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
