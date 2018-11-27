import React, { Component, Fragment } from 'react';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home'
import Vent from './Components/Vent'
import JournalSearch from './Components/JounralSearch'
import { BrowserRouter as Router, Route, withRouter, Switch, Redirect} from 'react-router-dom';
// import { connect } from 'react-redux';
// import { fetchedUser } from './actions/openBookActions'


    // TO DO :
    // - neeed to make an actual Result Detail component, for line 14 ^, probably display the entry's date as well
    // - make MY past journal entries searchable by date
    // - add "back to home" button from Journal Search page
    // - add profile page?
    // - after successfully logging in, why is it redirecting to a BLANK home page, unless i refresh?
    // - add Navbar
    // - fix entries.filter when you do Journal Search

    // STYLING TO DO:
    // - minimize / erase white space between the 4 grey boxes of home page ? :D

class App extends Component {
  constructor(){
    super()
    this.state={
      user: null
    }
  }

  componentDidMount(){
    let token = localStorage.getItem('token')
    if (token)
      fetch(`http://localhost:3000/api/v1/home`, {
        headers: {
          "Authorization" : `Bearer ${token}`
        }
      }).then(res => res.json())
      .then(data => this.setState({
        user: data.user
      }, () => this.props.history.push('/home'))
    )
  }

  logout = () => {
   localStorage.clear()
   this.setState({user: null})
   this.props.history.push('/')
  }

  render() {
    return (
      <Fragment>
          <Switch>
            <Route exact path={'/'} render={(props) => <Login {...props} user={this.state.user}/>}/>
            <Route exact path={'/home'} render={(props) => <Home {...props} logout={this.logout} user={this.state.user}/>}/>
            <Route exact path={'/vent'} render={(props) => <Vent {...props} user={this.state.user}/>}/>
            <Route exact path={'/search'} render={(props) => <JournalSearch {...props} user={this.state.user}/>}/>
          </Switch>
      </Fragment>
    );
  }
}




export default withRouter(App);

//   render() {
//     return (
//       <Fragment>
//         <Router>
//           <Switch>
//             <Route exact path={'/'} render={(props) => <Login {...props} user={this.state.user}/>}/>
//
//             {this.state.user ?
//               <React.Fragment>
//                 <Route exact path={'/home'} render={(props) => <Home {...props} logout={this.logout} user={this.state.user}/>}/>
//                 <Route exact path={'/vent'} render={(props) => <Vent {...props} user={this.state.user}/>}/>
//                 <Route exact path={'/search'} render={(props) => <JournalSearch {...props} user={this.state.user}/>}/>
//               </React.Fragment>
//               :
//               null
//             }
//
//           </Switch>
//         </Router>
//       </Fragment>
//     );
//   }
// }
