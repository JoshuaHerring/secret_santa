import { Component } from 'react';
import './Main.css';
import NameTextBox from '../../components/NameTextBox/NameTextBox.js';

// The entire main body of my webpages
export default class Main extends Component { 
  // Constructs the main class component
  constructor() {
    super();

    // initializing variables
    this.state = {
      names:[],
      ids:[],
      id:0,
      name: "",
      pairs: []
    }
  }

  // A description of what this mehtod does for future use
  // componentDidMount() {
  //   //Here you should make fetch requests
  //   // This code runs imediatmly after the componemnt renders for the first time
  // }

  /**
   * Handles the event for the submit name button
   */
  submitName() {
    // if they entered a name and the webpage is in arrray mode
    if(this.state.name) {
      if(this.state.names instanceof Array){

        //Add the name to the names list and it's coresponding id to the ids
        this.state.names.push(this.state.name)
        this.state.ids.push(this.state.id)
        // use set state to trigger rerender and solidify the variables in memory
        this.setState({id: this.state.id + 1})
        this.setState({names: this.state.names})
        // Reset names to blank so that the input field empty's automatically
        this.setState({name:""})
      } else{
        //if webpage is not in array mode then empty names
        this.setState({names: []})
      }
    }
  }

  /**
   * Checks is the pair is already in the pairs
   * @param {A list of lists with two items to check for duplicates} pairs 
   * @param {the new list of two items you are checking if it is a duplicate } pair 
   * @returns True if not a duplicate, Flase if a duplicate
   */
  hasDuplicate(pairs, pair) {
    return (pairs.some(set => {
      const[a,b] = set
      return a == pair[0] && b == pair[1]
    }))
  }

  /**
   * Organizes a list of items into pairs of 2
   */
  makePairs() {
    // Variables initialized and list is split in halve
    let names = this.state.names
    let names1 = names.splice(0, names.length/2)
    let names2 = names.splice(0, names.length)
    let pairs = []

    // for each item in the cut in halve list
    for(let times = 0; times < names1.length; times++) {
      // choose a random list item
      let number = Math.floor(Math.random() * (names1.length))
      //and make a pair from each list halve
      let pair = [names1[number], names2[number]]

      // Checks if pair is a duplicate and adds it if it is not
      if(this.hasDuplicate(pairs, pair)) {
        times--
      } else {
        pairs.push(pair)
      }
    }
    
    // Updates the state with the new pairs and triggers a re-render
    this.setState({pairs: pairs})
  }

  // Renders the html body based off of the state
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
