import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button'
class App extends Component {

  constructor() {
    super()
    this.state ={
      catArray: [],
      cats: ""
    }
    //binders go here
   
    this.thisButton = this.thisButton.bind(this);
  }
  //api key e2ed5ae39e5d1bf34dcdc6f75ad6b13e  
  thisButton() {
    fetch("https://aws.random.cat/meow?ref=apilist.fun")
  .then(res => res.json())
  .then(res => {
    this.setState({cats: res.file})
    console.log(res)
    })}
 

render() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="App-title">Random Cats</h1>
      </header>
      <div className="litterbox">
        <img src={this.state.cats} alt='cat image'></img>
        </div>
        <div>
      <Button thisButton={this.thisButton} label={'next res'}/>
      </div>
      
    </div>
  );
}
}
export default App;
