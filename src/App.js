import React, { Component } from 'react';
import './App.css';
import './css/main.css';
import Header from './component/header';
import First from './component/first';
import Second from './component/second';
import 'font-awesome/css/font-awesome.min.css';
import Third from './component/third';
import Forty from './component/forty';
import Fifty from './component/fifty';

class App extends Component {
  render() {
    return (
      <div className="App">

      <Header />
      <First />
      <Second />
      <Third />
      <Forty />
      <Fifty />
    
     
     
      </div>
    );
  }
}

export default App;
