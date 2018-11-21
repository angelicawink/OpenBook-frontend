import React, { Component } from 'react';
import { Button, FormControl, FormGroup } from 'react-bootstrap'

class Login extends Component {
  render() {
    return (
      <div class="container">
        <div class="container">
          <h1 class="page-header">Open Book. <small> we're with you.</small></h1>
        </div>
        <div class="container">
          <div class="col-sm-4">
            <form>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="username"/>
              </div>

              <div class="form-group">
                <button type="submit" class="btn btn-default">Log In</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    )
  }
}

export default Login
