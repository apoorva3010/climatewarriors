import React, {Component} from 'react';
import {Line, Bar} from 'react-chartjs-2';
import axios from 'axios';
import './co2.css'

export default class methane extends Component {
  
    constructor(props){
        super(props);
        this.state={
            labels: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
            data: []
        }
    }

    async fetchData(){
        var response = await axios.get(' https://global-warming.org/api/co2-api');
        console.log(response);
        var arr=[];
        console.log("length: " + response.data.co2.length);
        var temp=0;
        for(let i=2011; i<=2020; i++){
            var sums=0;
            var avg=0;
            var cnt=0;
            var j=temp;
            while(parseInt(response.data.co2[j].year)===i){
                sums+=parseInt(response.data.co2[j].cycle);
                cnt+=1;
                temp+=1;
                j+=1
            }
            avg=parseInt(sums/cnt);
            console.log(avg);
            arr.push(parseInt(avg));
        }
        console.log(arr);
        this.setState({
                data:arr
        })
        console.log(this.state);
    }
    
    componentDidMount(){
        console.log('Mounted');
        console.log(this.state);
        this.fetchData();
    }
    render() {
      return (
            <div className="container" style={{width:'300px'}}>
                <h6 class="co2text">Carbon Dioxide levels from year 2011 to 2020</h6>
                <Line 
                    data={{
                        labels: this.state.labels,
                        datasets: [
                            {
                                label: 'Part per million(ppm)',
                                data: this.state.data,
                                borderColor: [
                                    '#00bcd4',
                                ],
                                backgroundColor: [
                                    'rgba(0, 256, 256, 0.1)'
                                ],
                                borderWidth: 2
                            }
                        ]
                    }}
                    height={150}
                    width={400}                     
                    options={{
                        maintainAspectRatio: false,
                    }}/>
            </div>
      );
    }
   }
  
