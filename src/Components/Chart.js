import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends Component {
  state = {
    moments: null
  }

  fetchMoments = () => {
    let token = localStorage.getItem('token')
    let userID = this.props.user.id

    fetch(`http://localhost:3000/api/v1/users/${userID}/moments`, {
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    }).then(res => res.json())
    .then(data => {
      this.setState({
        moments: data
      }, () => {
            let datesArray = []
            this.state.moments.forEach(moment => datesArray.push("Nov " + moment.created_at.slice(8,10)))

            let ranksArray = []
            this.state.moments.forEach(moment => ranksArray.push(moment.feeling.rank))

            this.setState({
              chartData: {
                labels: datesArray,
                datasets: [
                  {
                    label: "feelings rank",
                    data: ranksArray,
                    backgroundColor: 'rgba(106, 194, 139, .9)'
                  }
                ]
              }
            })
      })
    })
  }

  componentDidMount(){
    this.fetchMoments()
  }

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
              fontSize: 20,
              fontColor: 'white'
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
