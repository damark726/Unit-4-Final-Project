import React, {Component} from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      fireRedirect: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    axios({
      url: '/auth/login',
      method: 'POST',
      data: {
        username: this.state.username,
        password: this.state.password
      }
    })
    .then( data => {
      console.log(data)
    })
    .catch( err => {
      console.log(err)
    })
    event.target.reset()
  }


  render() {
    console.log(this.state)
    return (
      <div className="Login">

        <div id="log-in">Please Log In</div>

        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} name="username" placeholder="username" />
          <br />
          <input type="text" onChange={this.handleChange} name="password" placeholder="password" />
          <br />
          <input type="submit" value="Sign In" />
        </form>

        {this.state.fireRedirect ? <Redirect to="/" /> : ""}
      </div>
    )
  }
}

export default Login;
