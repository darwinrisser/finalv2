import React, { Component } from 'react';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import UserList from './components/UserList';

class App extends Component {
  
  state = {
    users: [],
    search: ""
  }

  componentDidMount(){
    fetch('http://teacherfinder-server.herokuapp.com/api/users')
    .then(response => response.json())
    .then(json => this.setState({users:json}))
  }

  onChange = e => {
    this.setState({ search : e.target.value });
  }
  
  render() {
    return (
      <div className="App">
        {/* <SignIn/> */}
        {/* <SignUp/> */}
        <UserList users={this.state.users} onChange={this.onChange} search={this.state.search}/>
      </div>
    );
  }
}

export default App;
