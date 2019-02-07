import React, { Component } from 'react'
import socket from 'socket.io-client'

import twitterLogo from '../twitter.svg'
import './Timeline.css'
import api from '../services/api'
import Tweet from '../components/Tweet'

class Timeline extends Component {
  state = {
    tweets: [],
    newTweet: '',
  }

  async componentDidMount() {
    this.subscribeToEvent()

    const response = await api.get('tweets')

    this.setState({ tweets: response.data })
  }

  subscribeToEvent = () => {
    const io = socket('http://localhost:3000')

    io.on('tweet', data => {
      this.setState(prevState => ({ tweets: [data, ...prevState.tweets] }))
    })

    io.on('like', data => {
      this.setState({
        tweets: this.state.tweets.map(
          tweet => (tweet._id === data._id ? data : tweet)
        ),
      })
    })
  }

  handleInputChange = e => {
    this.setState({ newTweet: e.target.value })
  }

  handleNewTweet = async e => {
    if (e.keyCode !== 13) return

    const content = this.state.newTweet
    const author = localStorage.getItem('@OmniStack:username')

    await api.post('tweet', { content, author })
    this.setState({ newTweet: '' })
  }

  render() {
    return (
      <div className="timeline-wrapper">
        <img height={24} src={twitterLogo} alt="Twitter" />

        <form>
          <textarea
            value={this.state.newTweet}
            onChange={this.handleInputChange}
            onKeyDown={this.handleNewTweet}
            placeholder="What's happening?"
          />
        </form>

        <ul className="tweet-list">
          {this.state.tweets.map(tweet => (
            <Tweet key={tweet._id} tweet={tweet} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Timeline
