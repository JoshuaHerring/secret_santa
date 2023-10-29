import { Component } from 'react';
import './Main.css';

export default class Main extends Component { 

  constructor() {
    super();

    this.state = {
      names:[],
      ids:[],
      id:0,
      name: ""
    }
  }

  componentDidMount() {
    //Here you should make fetch requests
    // This code runs imediatmly after the componemnt renders for the first time
  }

  submitName() {
    if(this.state.name) {

      this.state.names.push(this.state.name)
      this.state.ids.push(this.state.id)
      this.setState({id: this.state.id + 1})
      this.setState({names: this.state.names})
      this.setState({name:""})
    }
  }

  render() {
    return (
    <main className="App">
        <h1>Main</h1>
        <input value={this.state.name} type='text' onChange={(event)=>{this.setState({name:event.target.value})}}></input>
        <button onClick={this.submitName.bind(this)}>Celebrate</button>
        <ul>
          {this.state.names.map((one_name, i) => {
            return <li key={this.state.ids[i]}>{one_name}</li>
          })}
        </ul>
    </main>
    )
  }
}
