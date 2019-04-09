import React, { Component } from 'react';
// import logo from './logo.svg';
import { Button } from 'reactstrap';
import PaulA from './paula';
import PaulB from './paulb';
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      mytext: 'helloo yellow felllowww'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const state = {...this.state};
    state.mytext = (new Date()).toLocaleString();
    this.setState(state);
  }

  render() {
    return (
      <div className="App">
        <h1>Paul says Go React</h1>
        <p className="text-success">Paul likes React</p>
        <p>This is just normal text from the state {this.state.mytext}</p>
        <Button color="danger" onClick={this.handleClick} >Click Me!</Button>
        <div className="container">
          <div className="row">
            <div className="col-6 nogut"><PaulA text="Hello Mum"></PaulA></div>
            <div className="col-6 nogut"><PaulB></PaulB></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
