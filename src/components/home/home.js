import React, {Component} from 'react';
import Navbar from '../navbar/navbar';
import './home.css';
import planter from './plantgray.jpg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Solutions from '../solutions/solutions';
import Subscription from '../subscription/subscription';

export default class home extends Component{

    constructor(props){
        super(props);
        this.state={
            gray: true
        }
    }

    changeColor(){
        this.setState({gray: !this.state.gray})
    }

    render(){
        let imgclass = this.state.gray ? "pure" : "filt";
        return (
            <div>
                <div class="home"><br></br><br></br><br></br>
                    <div class="innerhome container" >
                        <Navbar />
                        <div class="row">
                            <div class="col s12 m7 l7 leftcolumn">
                                <br></br>
                                <h6 style={{fontSize:'20px'}}>TAKE ACTION</h6><br></br>
                                <h4>Unaware of one of the most daunting real world problems that has gripped us over the last few decades?</h4>
                                <br></br><br></br>
                                <h6 style={{fontSize:'20px'}}>Click to check it out</h6><br></br>
                                <a class="btn amber" onClick={this.changeColor.bind(this)}>CLimate Change Reality</a>
                            </div>
                            <div class="col s12 m5 l5">
                                <img className={imgclass} style={{marginLeft:'10%'}} src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/yucca-cane-plant-in-a-pot-on-a-white-background-royalty-free-image-1580856558.jpg" width="85%" />
                            </div>
                        </div>
                    </div>
                </div>
                <Solutions />
                <Subscription />
            </div>
        )
    }
}
