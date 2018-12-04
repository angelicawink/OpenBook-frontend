import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

class PieChart extends Component{
  state={
    showPositive: true
  }

handleChange = (event) => {
  if (event.target.name === "good"){
    this.setState({
      showPositive: true
    })
  }
  else {
    this.setState({
      showPositive: false
    })
  }
}

badColor = () => {
  if (!this.state.showPositive){
    return 'rgba(186, 171, 245, 1)'
  }
}

goodColor = () => {
  if (this.state.showPositive){
    return 'rgba(100, 166, 150, 1)'
  }
}


  render(){
    return(
      <>
        <h2 className="pie-chart-header">Where I am When I'm Feeling:</h2>
        <button
          id="good"
          name="good"
          style={{background: this.goodColor()}}
          onClick={this.handleChange}>Good</button>
        <button
          id="bad"
          name="bad"
          style={{backgroundColor: this.badColor()}}
          onClick={this.handleChange}>Bad</button>

    {this.state.showPositive && this.props.posPieChartData ?
        <Pie id="pie-chart"
            data={this.props.posPieChartData}

          options={{
            title: {
              display: false,
              text: `Where I am When I'm Feeling:`,
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
              text: `Where I am When I'm Feeling:`,
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
    </>
    )
  }
}

export default PieChart
