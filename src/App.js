import React, { Component } from 'react';
// import logo from './logo.svg';
import Navbar from './latihan/navbar'
// import Footer from './latihan/footer'
import Home from './latihan/home'
import Home1 from './latihan/home1'
import Login from './latihan/login'
import SignUp from './latihan/registration'
import Login1 from './latihan/login.1'
import Product from './latihan/productlist'
import {connect} from 'react-redux'
import cookie from 'universal-cookie'
import {keepLogin} from './1. action'
import {Route, withRouter} from 'react-router-dom'
import './App.css';

const objCookie = new cookie()
class App extends Component {
  componentDidMount(){
    var terseraah = objCookie.get('userData')
    if (terseraah !== undefined){
      this.props.keepLogin(terseraah)
    }
  }
  render() {
    return (
      <div className="App">
          <Navbar/>
          {/* <div className='container'> */}
              <Route path = '/' component = {Home1} exact/> 
              <Route path = '/login' component = {Login}/>
              <Route path = '/login1' component = {Login1}/>
              <Route path = '/Signup' component = {SignUp}/>
              <Route path = '/products' component = {Product}/>
              <Route path = '/home1' component = {Home1}/>

              
          {/* </div> */}
          {/* <Footer/> */}
      </div>
    );
  }
}

export default withRouter( connect (null, {keepLogin}) (App));
