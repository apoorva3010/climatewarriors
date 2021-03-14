import axios from 'axios';
import React, { Component } from 'react';
import './weather.css'

export default class weather extends Component {

    constructor(props){
        super(props);
        this.state = {
            data:'',
            key: '7affee3a74f8df636393c915ee5f33e5',
            place:''
        }
    }

    async fetchWeatherData(input){
        var response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${this.state.key}`);
        this.setState({
            data:response.data
        })
        console.log(this.state.data)
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value })
    }

    submitHandler = (e) =>{
        e.preventDefault();
        console.log('submithandler')
        console.log(this.state.place)
        this.fetchWeatherData(this.state.place)
    }

    componentDidMount(){
        console.log('weather mount');

    }

    render() {
        const dd = this.state.data;
        if(dd){
                return (
                    <div class="weather">
                        <h5 style={{marginLeft:'1%'}}><b>Know the weather of any location</b></h5>
                        <p class="grey-text" style={{marginTop:'1%', marginLeft:'1%'}}>Experience the climate change</p><br></br>
                        <div class="row" style={{marginTop:'1%'}}>
                            <div class="col s12 m8 l8 amber lighten-1" style={{marginLeft:'2%', borderRadius:'10px', minHeight:'25vh'}}>
                            <form onSubmit={this.submitHandler}>
                                <h5 style={{marginTop:'2%'}}>Enter the name of a valid location<b> here.</b></h5><br></br><br></br>
                                    <input type="text" required id="place" name="place" onChange={this.changeHandler} />
                                <div class="right"><input class="white black-text btn" type="submit" style={{textTransform:'lowercase'}} value="Submit"/></div>
                            </form>
                            </div>
                        </div>
                        <br></br>
                        <div class="row">
                            <div class="col s12 m5 l5" style={{minHeight:'20vh', color:'white', backgroundColor:'#009688', marginLeft:'2%', borderRadius:'10px'}}>
                                <br></br>
                                <h5>{dd.name}</h5><br></br>
                                <p>Current Temp: {dd.main.temp}</p>
                                <p>Minimum Temp: {dd.main.temp_min}</p>
                                <p>Maximum Temp: {dd.main.temp_max}</p>
                            </div>
                            <div class="col s12 m5 l5" style={{minHeight:'20vh', color:'white', backgroundColor:'#009688', marginLeft:'5%', borderRadius:'10px'}}>
                                <br></br>
                                <h5>Weather of {dd.name}</h5><br></br>
                                <p>{dd.weather.description}</p>
                                <p>Speed of wind: {dd.wind.speed}</p>
                                <p>Degree of wind: {dd.wind.deg}</p>
                                <p>Visibility {dd.sys.visibility}</p>
                            </div>
                        </div>
                    </div>
                );
            }
        return (
            <div class="weather" id="weather">
                <h5 style={{marginLeft:'1%'}}><b>Know the weather of any location</b></h5>
                <p class="grey-text" style={{marginTop:'1%', marginLeft:'1%'}}>Experience the climate change</p>
                <div class="row"  style={{marginTop:'2%'}}>
                    <div class="col s12 m8 l8 amber lighten-1" style={{marginLeft:'2%', borderRadius:'10px', minHeight:'25vh'}}>
                    <form onSubmit={this.submitHandler}>
                        <h5 style={{marginTop:'2%'}}>Enter the name of a valid location<b> here.</b></h5><br></br><br></br>
                            <input type="text" required id="place" name="place" onChange={this.changeHandler} />
                        <div class="right"><input class="white black-text btn" type="submit" style={{textTransform:'lowercase'}} value="Submit"/></div>
                    </form>
                    </div>
                </div>
                
            </div>
        )
    }
}
