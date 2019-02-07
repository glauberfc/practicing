import React, { Component } from 'react'

import twitterLogo from '../twitter.svg'
import './Login.css'

class Login extends Component {
  state = {
    username: '',
  }

  handleInputChange = e => {
    this.setState({
      username: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    const { username } = this.state

    if (!username.length) return

    localStorage.setItem('@OmniStack:username', username)

    this.props.history.push('/timeline')
  }

  render() {
    return (
      <div className="login-wrapper">
        <img src={twitterLogo} alt="Twitter" />
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default Login
