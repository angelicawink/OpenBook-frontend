import React, { Component } from "react";
import { fetchPostNewPoem } from "../fetches";

class Poem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      title: ""
    };
  }

  handleChange = event => {
    this.setState({ content: event.target.value });
  };

  setTitle = event => {
    this.setState({ title: event.target.value });
  };

  componentDidUpdate(prevProps) {
    if (this.props.wordToAdd !== prevProps.wordToAdd) {
      if (this.state.content[this.state.content.length - 1] === " ") {
        this.setState({
          content: this.state.content.concat(this.props.wordToAdd)
        });
      } else {
        this.setState({
          content: this.state.content.concat(" " + this.props.wordToAdd)
        });
      }
    }
  }

  savePoem = () => {
    let token = localStorage.getItem("token");
    let userID = this.props.user.id;
    let newTitle = this.state.title;
    let newContent = this.state.content;

    fetchPostNewPoem(token, userID, newTitle, newContent).then(data => {
      this.props.addPoem(data);
      this.props.togglePoetryDisplay();
    });
  };

  render() {
    return (
      <>
        <div className="col-xs-7">
          <form className="form-group">
            <input
              type="text"
              placeholder="Type To Add Poem Title"
              className="poem-title form-control"
              onChange={this.setTitle}
            />
            <textarea
              id="poem-textarea"
              onChange={this.handleChange}
              className="poem-body form-control"
              placeholder="Type To Add Poem Body"
              value={this.state.content}
            />
          </form>
          <button onClick={this.savePoem} id="save-poem">
            Save
          </button>
        </div>
      </>
    );
  }
}

export default Poem;
