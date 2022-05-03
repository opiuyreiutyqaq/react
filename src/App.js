import React, { Component } from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import  About  from "./pages/About"
import  Home  from "./pages/Home"
import  Register  from "./pages/Register"

export default class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a>
                <a className="nav-link" href="#">Features</a>
                <a className="nav-link" href="#">Pricing</a>
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
                  <NavLink className="nav-link " to="/home">Home</NavLink>
                  <NavLink className="nav-link " to="/register">Register</NavLink>
                  <NavLink className="nav-link " to="/about">About Us</NavLink>
              </div>
            </div>
          </div>
        </nav>
        <div>
          <Routes>
            <Route path='/about' element={<About/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </div>
      </div>
    )
  }
}
