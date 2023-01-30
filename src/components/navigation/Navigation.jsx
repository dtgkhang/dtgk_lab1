import React, { Component } from 'react'
import './navigation.css'

export default class Navigation extends Component {
  render() {
    return (
        <nav>
        <div className="logo">
            <img src='assets/Oscar_logo.png' alt="" />
        </div>
        <ul>
            <li><a className='active' href='#home'>Home</a></li>
            <li><a href='#news'>News</a></li>
            <li><a href="#about">About</a></li>
        </ul>
      </nav>
    )
  }
}
