import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
// import Home from './Home';
import Letter from './Letter';
import Poetry from './Poetry';

class Vent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect = (selectedIndex, e) => {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render(){
    const { index, direction } = this.state;

    return(
      <>
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
          >

          <Carousel.Item>
            <Poetry/>
          </Carousel.Item>

          <Carousel.Item>
            <Letter/>
          </Carousel.Item>

          <Carousel.Item>
            <img width={900} height={500} src="https://static.rgscdn.com/images/xl/701702.jpg?v=100749425435-1" alt="heart"/>
          </Carousel.Item>

        </Carousel>


      </>
    )
  }
}

export default Vent
