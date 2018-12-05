import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import PoemCard from './PoemCard';


class Wallow extends Component {

  getColorIndex = (id) => {
    if (id <= 7){
      return id
    } else{
      let remainder = id % 7
      return remainder
    }
  }

  render(){

    const colors = [
      'rgba(217, 78, 147, 1)',
    'rgba(253, 255, 133, 1)',
    'rgba(101, 139, 191, 1)',
    'rgba(158, 205, 245, 1)',
    'rgba(253, 165, 56, 1)',
    'rgba(208, 172, 245, 1)',
    'rgba(242, 147, 142, 1)']

    return(
      <div className="poems container">
        {this.props.user ?
          <Card.Group>
            {this.props.user.poems.reverse().map((poem, index) =>

                <PoemCard key={poem.id} color={colors[this.getColorIndex(poem.id)]} poem={poem}/>

            )}
          </Card.Group>
        : null}
      </div>
    )
  }
}

export default Wallow
