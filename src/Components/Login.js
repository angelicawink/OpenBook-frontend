import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Signup from './Signup';

class Login extends Component {
  state={
    username: '',
    password: ''
  }

componentDidMount(){
  let token = localStorage.getItem('token')
  if (token) {
     this.props.history.push('/home')
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.handleLogin(this.state)

    this.setState({
      username: '',
      password: ''
    })
  }

  handleLogin = (data) => {
    let usernameInput = data.username
    let passwordInput = data.password

    fetch('http://localhost:3000/api/v1/login', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        user: {
          username: usernameInput,
          password: passwordInput
        }
      })
    }).then(res => res.json())
    .then(data => {
      if (data.error){
        alert('Invalid username or password')

      } else {
        localStorage.setItem('token', data.jwt)
        this.props.setUser(data.user_info)
      }
    })
  }



  render() {
    if (this.props.user) {
      return <Redirect push to={'/home'}/>
    } else {
      return (
        <div className="login-body">

          <div className="container">
            <h1 className="page-header login">Open Book. <small> we're with you.</small></h1>
          </div>

          <div className="container">
            <div className="col-sm-4">

              <h2>Log In</h2>
              <form onSubmit={this.handleSubmit}>

                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control short" name="username" placeholder="username" onChange={this.handleChange}/>
                  <label>Password</label>
                  <input type="password" className="form-control short" name="password" placeholder="password" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-warning">Log In</button>
                </div>

              </form>

            </div>
          </div>

          <Signup setUser={this.props.setUser}/>

        </div>
      )
    }
  }
}


export default Login;
