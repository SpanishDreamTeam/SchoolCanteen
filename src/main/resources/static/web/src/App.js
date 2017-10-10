import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Header from './component/newHeader';
import {Content} from './component/newMenu';
import {getService} from './model/fetch';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }
  
    render() {
      return (
        <div className="App">
          <Router>
            <div>
              <Route exact path="/" render={()=> <Header />}/>
              <Route exact path="/" component={Content}/>
            </div>                   
          </Router>
        </div>
      );
    }
  }

export default App;
