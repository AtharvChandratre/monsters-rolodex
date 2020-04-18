import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component{

  constructor(){
    super();
    this.state={
      monsters:[],
      SearchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(
      response => response.json()
    ).then(
      users => this.setState({monsters:users})
    );
  }

  handlechange = e => {
    this.setState({SearchField: e.target.value})
  }

  render(){
    const {monsters, SearchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(SearchField.toLowerCase()))
    return (
    <div className="App">
    <h1>Monsters Rolodex</h1>
    <SearchBox 
    placeholder="Search Monsters" 
    changehandler={this.handlechange}>
    </SearchBox>
    <CardList monsters={filteredMonsters}></CardList>
    </div>
  );
  }
  
}

export default App;
