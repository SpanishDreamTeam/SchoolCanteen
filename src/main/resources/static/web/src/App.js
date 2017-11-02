import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import {Header,Nav} from './component/newHeader';
import {Content} from './component/newMenu';
import {getService} from './model/fetch';
import Footer from './component/footer';
import Contact from './component/contact';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    let isLogin;
    if(sessionStorage.getItem('name')){
      isLogin=true;
    }else {
      isLogin=false;
    }
    this.state={
      isLogin:isLogin
    };
  }
  changeLogin=()=>{
    this.setState({
      isLogin:true
    }); 
  }
  loginOut=()=>{
    this.setState({
      isLogin:false
    }); 
    sessionStorage.removeItem('name');
  }
    render() {
      const {isLogin}=this.state;
      return (
        <div className="App">
          <Router>
            <div>
              <Route path="/" render={()=> <Nav isLogin={isLogin} loginOut={this.loginOut}/>}/>
              <Route exact path="/" render={()=> <Header changeLogin={this.changeLogin} isLogin={isLogin}/>}/>
              <Route exact path="/" component={Content}/>
              <Route exact path="/" component={Footer}/>
              <Route exact path="/menus" render={()=> <Content type="allMenus"/>}/>
              <Route exact path="/contact" render={()=> <Contact />}/>
            </div>                   
          </Router>
        </div>
      );
    }
  }

export default App;
