import React, { Component} from 'react';
import { Card } from 'semantic-ui-react';


class PoemCard extends Component{

parsePoemContent = () => {
  console.log(this.props.poem)
  var poemLines = this.props.poem.content.split((/[,.]/))
  return poemLines
}

  render(){
    return(
      <Card>
        <Card.Content>
          <Card.Header>{this.props.poem.title}</Card.Header>
          {this.parsePoemContent().map((line, index) =>
            <Card.Meta
              className="line"
              key={index}>
              {line}
            </Card.Meta>)}
        </Card.Content>
      </Card>
    )
  }
}

export default PoemCard
