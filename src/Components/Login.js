import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

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

        this.props.history.push('/home')
      }
    })
  }

  render() {
    if (this.state.user) {
      return <Redirect push to={'/home'}/>
    } else {
      return (
        <div className="container">
          <div className="container">
            <h1 className="page-header">Open Book. <small> we're with you.</small></h1>
          </div>
          <div className="container">
            <div className="col-sm-4">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input type="text" className="form-control" name="username" placeholder="username" onChange={this.handleChange}/>
                  <input type="password" className="form-control" name="password" placeholder="password" onChange={this.handleChange}/>

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


export default Login;
