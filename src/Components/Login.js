import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  render() {
    if (this.props.userID) {
      return <Redirect push to={'/home'}/>
    } else {
      return (
        <div className="container">
          <div className="container">
            <h1 className="page-header">Open Book. <small> we're with you.</small></h1>
          </div>
          <div className="container">
            <div className="col-sm-4">
              <form onSubmit={this.props.handleLogin}>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="username"/>
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-default">Log In</button>
                </div>
              </form>
            </div>
          </div>

        </div>
      )
    }
  }
}

export default Login
