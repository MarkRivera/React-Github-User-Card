import React, { Component } from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';
import './App.css';

import UserDisplay from './components/UserDisplay';
import UserHeader from './components/UserHeader';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        name: "User",
        bio: "Hey I'm Mark",
      },

      followers: []
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/MarkRivera')
      .then(res => this.setState({
        user: res.data
      }))
      .catch(err => console.log(err))

    // Get Followers

    axios.get('https://api.github.com/users/MarkRivera/followers')
      .then(res => {
        this.setState({
          followers: res.data
        })
      })
  }

  render() {
    return (
      <main className="app">
        <Container className="container-fluid">
          <UserHeader 
            userName={this.state.user.name}
          />

          <UserDisplay 
            userImg={this.state.user.avatar_url}
            userLocation={this.state.user.location}
            userFollowers={this.state.user.followers}
            userBio={this.state.user.bio}
            userRepos={this.state.user.public_repos}
            userSite={this.state.user.blog}
            followers={this.state.followers}
          />
        </Container>
      </main>
    );
  }
}

export default App;
