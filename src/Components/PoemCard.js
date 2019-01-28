import React, { Component } from "react";
import { Card } from "semantic-ui-react";

class PoemCard extends Component {
  parsePoemContent = () => {
    var poemLines = this.props.poem.content.split(/[,.]/);
    return poemLines;
  };

  render() {
    return (
      <div className="col-xs-4">
        <br />
        <Card style={{ backgroundColor: this.props.color }} color="yellow">
          <Card.Content>
            <Card.Header>{this.props.poem.title}</Card.Header>
            {this.parsePoemContent().map((line, index) => (
              <Card.Meta className="line" key={index}>
                {line}
              </Card.Meta>
            ))}
          </Card.Content>
        </Card>
        <br />
      </div>
    );
  }
}

export default PoemCard;
