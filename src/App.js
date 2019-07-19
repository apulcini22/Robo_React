import React, { Component } from 'react';
import CardList from './Components/CardList';
import SearchBox from './Components/SearchBox';

import './App.css';
//import { robots } from './robots_data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchField: '',
      isLoading: true
    }
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(results => this.setState({robots: results}))
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
    return (
      <div className="tc">
        <h1 className="f2">ROBOT FRIENDS</h1>
        <SearchBox searchChange={event => this.setState({ searchField: event.target.value })}/>
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
