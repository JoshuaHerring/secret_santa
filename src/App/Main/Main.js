import { Component } from 'react';
import './Main.css';
import NameTextBox from '../../components/NameTextBox/NameTextBox.js';

export default class Main extends Component { 

  constructor() {
    super();

    this.state = {
      names:[],
      ids:[],
      id:0,
      name: "",
      pairs: []
    }
  }

  componentDidMount() {
    //Here you should make fetch requests
    // This code runs imediatmly after the componemnt renders for the first time
  }

  submitName() {
    if(this.state.name) {
      if(this.state.names instanceof Array){

        this.state.names.push(this.state.name)
        this.state.ids.push(this.state.id)
        this.setState({id: this.state.id + 1})
        this.setState({names: this.state.names})
        this.setState({name:""})
      } else{

        this.setState({names: []})
      }
    }
  }

  hasDuplicate(pairs, pair) {
    return (pairs.some(set => {
      const[a,b] = set
      return a == pair[0] && b == pair[1]
    }))
  }

  makePairs() {
    let names = this.state.names
    let names1 = names.splice(0, names.length/2)
    let names2 = names.splice(0, names.length)
    let pairs = []

    for(let times = 0; times < names1.length; times++) {
      let number = Math.floor(Math.random() * (names1.length))
      let pair = [names1[number], names2[number]]


      if(this.hasDuplicate(pairs, pair)) {
        times--
      } else {
        pairs.push(pair)
      }
    }
    
    console.log(pairs)
    this.setState({pairs: pairs})
  }

  render() {
    return (
    <main className="App">
        <h2>Input your names</h2>
        <input value={this.state.name} type='text' onChange={(event)=>{this.setState({name:event.target.value})}}></input>
        <button onClick={this.submitName.bind(this)}>Enter Name</button>
        <NameTextBox names={this.state.names} ids={this.state.ids} pairs={this.state.pairs}/>
        <button onClick={() => {this.makePairs()}}>Make Pairs</button>
    </main>
    )
  }
}
