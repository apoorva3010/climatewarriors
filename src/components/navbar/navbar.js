import React from 'react';
import './navbar.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
import subscription from '../subscription/subscription';
import solutions from '../solutions/solutions';

export default function navbar() {
    return (
        <div class="navbarr">
            <ul style={{marginLeft:'0%'}}>
                <li class="left"><Link to="/"><a href="#" style={{fontSize:'18px'}} id="logo"><b>ClimateWarriors</b></a></Link></li>
                <li class="right" style={{marginTop:'2%'}}><a href="#subscription">Subscribe</a></li>
                <li class="right" style={{marginTop:'2%'}}><a href="#solution">Solutions</a></li>
                <li class="right"><Link to="/statistics"><a href="#">Stats</a></Link></li>
                
            </ul>
        </div>
    )
}
