import React, { Component } from 'react';
import './App.css';

class App extends Component() {
  constructor() {
    super()
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/MarkRivera')
      .then(res => console.log(res.data))
  }

  render() {
    return (
      <div className="App">
        User Stuff
      </div>
    );
  }
}

export default App;
