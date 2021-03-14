import React from 'react';
import Subscription from '../../subscription/subscription';
import Co2 from '../co2/co2'
import Inference from '../inferences/inference';
import Methane from '../methane/methane'
import Pie from '../pie/pie';
import Weather from '../weather/weather';
import './addgraph.css';
import Yoga from './yoga.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
import Stash from '../stash/stash';

export default function addgraph() {
    return (
        <div class="maingraph grey lighten-2">
            <br></br><br></br>
            <div class="innergraph grey lighten-4">
                <div class="row " style={{margin:0}}>
                        <div class="col s12 m3 l3 white side" style={{minHeight:'86vh', margin:'0', padding:'0'}}> 
                            <ul>
                                <li><a href="#stats">Stats for Nerds</a></li>
                                <li><a href="#data">Understanding the Data</a></li>
                                <li><a href="#weather">Know the weather of your location</a></li>
                                <li><a href="#stash">Stash</a></li>
                                <li><Link to="/"><a href="" style={{padding:'0'}}>Back to square 1?</a></Link></li>
                            </ul>
                        </div>

                        <div class="col s12 m9 l9 movable">
                        <br></br>
                        <h5 style={{marginLeft:'1%'}}  id="stats"><b>Statistics</b></h5>
                        <p class="grey-text" style={{marginTop:'1%',marginLeft:'1%'}}>Know the facts, today!</p><br></br>
                        <div class="row">
                            <div class="col s12 m7 l7" style={{marginLeft:'2%'}}>
                                <div class="weatherapp amber row" style={{overflow:'hidden'}}>
                                    <div class="col s12 m6 l6"><h6 style={{marginTop:'5%', marginLeft:'2%', fontSize:'20px'}}>Do you know the <br></br>weather of <b>your location?</b></h6><br></br><br></br>
                                    <a class="btn white black-text" href="#weather"><b>Try Now</b></a></div>
                                    <div class="col s12 m6 l6"><img class="right" src={Yoga} width="100%"/></div>
                                </div>
                            </div>
                            <div class="col s12 m4 l4 center">
                                <div class="information purple lighten-1" style={{marginTop:'3.5%'}}>
                                    <h5 class="white-text stoptext" style={{marginTop:'0%'}}><b>Did you know?</b></h5>
                                    <ol style={{listStyleType:'disc', color:'white', marginTop:'4%'}}>
                                        <li style={{textAlign:'left', marginRight:'1%'}}>Indonesia will move its capital city as its current one is sinking</li>
                                        <li style={{textAlign:'left',  marginRight:'2%'}}>Average wildlife populations has dropped by 60% in just 40 years</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col s12 m4 l4"  style={{marginLeft:'2%'}}><Co2 /><br></br></div>
                            <div class="col s12 m4 l4"  style={{marginLeft:'3%'}}><Methane /></div>
                            <div class="col s12 m4 l4">

                            </div>
                        </div>
                        <Inference />
                        <Weather />
                        <Stash />
                        </div>
                </div>
            </div>
        </div>
    )
}
