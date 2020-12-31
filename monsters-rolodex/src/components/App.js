
import React, { Component } from 'react'
import './App.css'

class App extends Component {

    state = {
        monsters: [
        ]
    }
// fetch returns a promise
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({monsters: users}))
    }
  render () {
    return (
      <div>
        <div className='App'>
          {
this.state.monsters.map((monster, index)=> <h1 key={monster.id}>{monster.name}</h1> )
          }
        
        </div>
      </div>
    )
  }
}

export default App

// class component gives us access to state
