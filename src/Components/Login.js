import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Signup from "./Signup";
import URL from "../helpers";
import { fetchLogin } from "../fetches.js";
import { Grid, Segment } from "semantic-ui-react";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token) {
      this.props.history.push("/home");
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.handleLogin(this.state);
    this.clearState();
  };

  clearState = () => {
    this.setState({
      username: "",
      password: ""
    });
  };

  handleLogin = body => {
    fetchLogin(body).then(data => {
      if (data.error) {
        alert("Invalid username or password");
        this.clearState();
      } else {
        localStorage.setItem("token", data.jwt);
        this.props.setUser(data.user_info);
      }
    });
  };

  render() {
    if (this.props.user) {
      return <Redirect push to={"/home"} />;
    } else {
      return (
        <div className="login-body">
          <div className="container">
            <h1 className="page-header login">
              Open Book. <small> we're with you.</small>
            </h1>
          </div>
          <br/>
          <Grid>
            <Grid.Column width={6}/>
            <Grid.Column textAlign="left">
              <Segment className="login-form" raised style={{background: 'rgba(132, 160, 205, 1)'}}>
                <h2>Log In</h2>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label>Username:</label>
                    <input
                      type="text"
                      className="form-control short"
                      name="username"
                      value={this.state.username}
                      placeholder="username"
                      onChange={this.handleChange}
                    />
                    <label>Password:</label>
                    <input
                      type="password"
                      className="form-control short"
                      name="password"
                      value={this.state.password}
                      placeholder="password"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <button type="submit" className="btn btn-warning">
                      Log In
                    </button>
                  </div>
                </form>
              </Segment>


              <Signup setUser={this.props.setUser} />
            </Grid.Column>
            <Grid.Column width={6}/>

          </Grid>
        </div>
      );
    }
  }
}

export default Login;
