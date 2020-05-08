import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
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
        bio: "Hey I'm Mark"
      }
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/MarkRivera')
      .then(res => this.setState({
        user: res.data
      }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <main className="app">
        <Container>
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
          />
        </Container>
      </main>
    );
  }
}

export default App;
