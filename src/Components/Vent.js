import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
// import Home from './Home';
import Letter from './Letter';

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
            <Letter/>
          </Carousel.Item>

          <Carousel.Item>
            <img width={900} height={500} src="http://www.reeshofcultuurt.nl/_Resources/Persistent/fef9a9d00a4df5c42d1feb2d91a5a2332b662155/facebook-like.svg" alt="heart"/>
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
