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
            <Poetry
              {...this.props}
              addPoem={this.props.addPoem}
              user={this.props.user}/>
          </Carousel.Item>

          <Carousel.Item>
            <Letter/>
          </Carousel.Item>

          <Carousel.Item>
            <div className="container poetry">
              We're all gonna die one day. Nothing Lasts forever. I'm ok. You're ok.
            </div>
          </Carousel.Item>

        </Carousel>


      </>
    )
  }
}

export default Vent
