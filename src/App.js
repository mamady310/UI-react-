import React, { Component } from 'react';
import './App.css';
import Button from './Button'
class App extends Component {

  constructor() {
    super()
    this.state ={
      count: 0,
      catArray: [],
    }
    //binders go here
    this.nextButton = this.nextButton.bind(this);
    this.previousButton = this.previousButton.bind(this);
    this.thisButton = this.thisButton.bind(this);
  }
  //api key e2ed5ae39e5d1bf34dcdc6f75ad6b13e  
  thisButton() {
    
    fetch("https://aws.random.cat/meow?ref=apilist.fun")
  .then(res => res.json())
  .then(res => {
    this.setState({cats: res.file})
    // console.log(res)
    if(this.state.catArray.length <= 15){
      this.setState(prevState => ({
      catArray: [...prevState.catArray, res]
    }))
    
    }else{this.state.catArray.shift();} 

    })
  }
  nextButton (){
    if(this.state.count < 15){
    this.setState({count: this.state.count + 1})
    }else {
      console.log(this.state.count)
    }
  
  }  
  previousButton (){
    if(this.state.count > 0){
    this.setState({count: this.state.count - 1})
    }else {
      console.log(this.state.count)
    }
  } 

render() {
   
  const count = this.state.count
  const img = this.state.catArray[count] 
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="App-title">Random Cats</h1>
      </header>
       <div className="topButtons">
         <Button thisButton={this.nextButton}label={'Next Cat'}/>
         <Button thisButton={this.previousButton}label={"Last Cat"}/>
        </div> 
      
      <div className="litterbox">
        <img src={this.state.cats} alt='cat image'/>
        </div>
        <div>
      <Button thisButton={this.thisButton}label={'Add Photo'}/>
      </div>
      
    </div>
  );
}
}
export default App;
