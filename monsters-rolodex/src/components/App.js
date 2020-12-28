
import React, { Component } from 'react'
import './App.css'

class App extends Component {

    state = {
        string: 'Hello World'
    }
  render () {
    return (
      <div>
        <div className='App'>
          <header className='App-header'>
            <h1> Monsters Rolodex</h1>
            <p>{this.state.string}</p>
            <button onClick = {() => this.setState({string: "Hello Again"  })}>Change text</button>
            <p>{4 + 5}</p>

          </header>
        </div>
      </div>
    )
  }
}

export default App

// class component gives us access to state
