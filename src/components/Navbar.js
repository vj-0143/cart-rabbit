"use strict"

import React from 'react'

function Navbar() {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  function logout(){
    localStorage.removeItem('currentUser')
    window.location.href='/login'
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href='/admin'>RabbitRooms</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {user ? (<>
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {user.name}                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">bookings</a>
                  <a class="dropdown-item" href="/login" onClick={logout}>logout </a>
                  
                </div>
              </div>
            </>) : (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/register">Register</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="/login">Login</a>
                </li>
              </>)}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
