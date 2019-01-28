import React, { Component } from "react";
import EnvelopeGif from "./EnvelopeGif";
import EnvelopeClosed from "./EnvelopeClosed";
import YellowLetter from "./YellowLetter";
import MailLetterGif from "./MailLetterGif";
import LetterDone from "./LetterDone";

class Letter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "closed envelope"
    };
  }

  handleClick = () => {
    switch (this.state.show) {
      case "closed envelope":
        return this.setState({ show: "envelope gif" });
      case "envelope gif":
        return this.setState({ show: "yellow paper" });
      case "yellow paper":
        return this.setState({ show: "finished letter" });
      case "finished letter":
        return this.setState({ show: "burn letter" });
      case "burn letter":
        return this.setState({ show: "done" });
      case "done":
        return this.setState({ show: "closed envelope" });
      default:
        return;
    }
  };

  goBack = () => {
    this.setState({ show: "closed envelope" });
  };

  renderContents = () => {
    switch (this.state.show) {
      case "closed envelope":
        return (
          <>
            <div className="env">
              <EnvelopeClosed handleClick={this.handleClick} />
            </div>
            <h3 id="click-to-vent">
              Click the envelope to give someone a piece of your mind.
            </h3>
          </>
        );
      case "envelope gif":
        return <EnvelopeGif timer={setTimeout(this.handleClick, 1400)} />;
      case "yellow paper":
        return <YellowLetter goBack={this.goBack} send={this.handleClick} />;
      case "finished letter":
        return <EnvelopeClosed timer={setTimeout(this.handleClick, 500)} />;
      case "burn letter":
        return <MailLetterGif timer={setTimeout(this.handleClick, 2500)} />;
      case "done":
        return <LetterDone handleClick={this.handleClick} />;
      default:
        return;
    }
  };

  render() {
    return this.renderContents();
  }
}

export default Letter;
