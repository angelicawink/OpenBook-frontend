import React, { Component } from 'react';
import EnvelopeGif from './EnvelopeGif';
import EnvelopeClosed from './EnvelopeClosed';
import YellowLetter from './YellowLetter';
import MailLetterGif from './MailLetterGif';
import LetterDone from './LetterDone';


class Letter extends Component{
  constructor(props){
    super(props);
    this.state={
      show: "closed envelope"
    }
  }


  handleClick = () => {
    if (this.state.show === "closed envelope"){
          this.setState({
            show: "envelope gif"})
    }
    else if (this.state.show === "envelope gif"){
        this.setState({
          show: "yellow paper"})
    }
    else if (this.state.show === "yellow paper"){
          this.setState({
            show: "finished letter"})
    } else if (this.state.show === "finished letter"){
        this.setState({
          show: "burn letter"
        })
    }
    else if (this.state.show === "burn letter"){
          this.setState({
            show: "done"
          })
    } else if (this.state.show === "done"){
      this.setState({
        show: "closed envelope"
      })
    }

  }

  goBack = () => {
    this.setState({
      show: "closed envelope"
    })
  }

  renderContents = () => {
    if (this.state.show === "closed envelope"){
        return(
          <>
            <div className="env">
            <EnvelopeClosed
              handleClick={this.handleClick}
              />
          </div>
          <h3 id="click-to-vent">Click the envelope to give someone a piece of your mind.</h3>
        </>)
    }
    else if (this.state.show === "envelope gif") {
        return <EnvelopeGif
                  timer={setTimeout(this.handleClick, 1400)}/>
    }
    else if (this.state.show === "yellow paper"){
        return <YellowLetter
                  goBack={this.goBack}
                  send={this.handleClick}/>
    }
    else if (this.state.show === "finished letter"){
      return <EnvelopeClosed
                timer={setTimeout(this.handleClick, 500)}/>
    }
    else if (this.state.show === "burn letter"){
        return <MailLetterGif
                  timer={setTimeout(this.handleClick, 2500)}/>
    }
    else if (this.state.show === "done"){
          return <LetterDone
                    handleClick={this.handleClick}/>
    }

  }

  render(){
    return (
      this.renderContents()
    )
  }
}

export default Letter
//
// <EnvelopeClosed
//            handleClick={this.handleClick}/>

// flame gif:
// https://zalarieunique.ru/images/clipart-fire-animated-gif-4.gif


// <EnvelopeClosed
//           handleClick={this.handleClick}/>

//  mailing letter gif:
// https://www.jdmwebtechnologies.com/wp-content/uploads/2018/03/emailus.gif
// https://media1.tenor.com/images/0b46edf37db3fd5d9ce71c9763bef6af/tenor.gif?itemid=12348454
// http://cdn.lowgif.com/full/62bade2e3c748562-letter-sending-find-make-share-gfycat-gifs.gif


// <EnvelopeGif
//   handleClick={this.handleClick}/>
//
// <YellowLetter
//   handleClick={this.handleClick}
// />

// lined yellow paper =
// "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Documents_icon.svg/651px-Documents_icon.svg.png"

// alternate envelope gif : "https://katiekershaw.files.wordpress.com/2015/09/envelope1.gif"
        // src="https://d3dvldql7ksohz.cloudfront.net/000_clients/646957/page/6469574kJDviXu.gif"
