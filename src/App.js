import React, { Component } from 'react';
import './App.css';
import AppBar from './components/AppBar';
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
    const {search} = this.state;
    const filteredUsers = [];
    filteredUsers = this.state.users.filter(user=>{
      return user.instrument.toLowerCase().indexOf( search.toLowerCase() ) !== -1
    })

    
    return (
      <div className="App">
        <AppBar/>
        <input type="text" label="narrow down your search" placeholder="Search" onChange={this.onchange} search={this.state.search}/>
        {/* <SignIn/> */}
        {/* <SignUp/> */}
        <UserList users={this.filteredUsers}/>
      </div>
    );
  }
}

export default App;
