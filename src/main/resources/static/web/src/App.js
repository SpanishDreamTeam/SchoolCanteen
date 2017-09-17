import React, { Component } from 'react';
import Header from './component/header';
import Nav from './component/nav';
import Menu from './component/menu';
import './App.css';

class App extends Component {
    render() {
      return (
        <div className="App">
          <Header />
          <Nav />
          <Menu />
        </div>
      );
    }
  }

export default App;
