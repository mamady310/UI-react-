import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button'
import Resturaunt from './Resturaunt'
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
    <div>
      <header>
      <h1>
       
      </h1>
      </header>
      <div className="litterbox">
        <img src={this.state.cats} alt=''></img>
      <Button thisButton={this.thisButton} label={'next res'}/>
      </div>
      
    </div>
  );
}
}
export default App;
