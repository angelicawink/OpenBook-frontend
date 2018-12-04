import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import PoemCard from './PoemCard';


class Wallow extends Component {



  render(){
    return(
      <div>
        {this.props.user ?
          <Card.Group>
            {this.props.user.poems.reverse().map((poem, index) =>
              <PoemCard key={poem.id} poem={poem}/>
            )}
          </Card.Group>
        : null}
      </div>
    )
  }
}

export default Wallow
