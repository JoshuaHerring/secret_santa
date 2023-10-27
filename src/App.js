import { Component } from 'react';
import logo from './logo.svg';
// import me from './me.jpg'
import './App.css';

class App extends Component { 

  constructor() {
    super();

    this.state = {
      text: "We are going to make Secret Santa"
    }
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{this.state.text}</p>
        <button onClick={() => {this.setState({text:'Wooohoooo'}, () =>{/*This is a callback function for set state*/console.log(this.state)})}}>Celebrate</button>
      </header>
    </div>
    )
  }
}

export default App;
