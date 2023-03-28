import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login.jsx'
import Dashboard from './components/Dashboard'



export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Routes>
          <Route path='/home'  element={<Home />}/>
          <Route path='/about'  element={<About />}/>
          <Route path='/contact'  element={< Contact/>}/>
          <Route path='/dashboard'  element={< Dashboard/>}/>
          <Route path='/login'  element={< Login/>}/>
          
          {/* <Route path='/dashoard'  element={< Dashboard/>}/> */}
        </Routes>
      </div> 
     
    )
  }
}
