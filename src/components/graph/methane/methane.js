import React, {Component} from 'react';
import {Line, Bar} from 'react-chartjs-2';
import axios from 'axios';
import './methane.css'


export default class methane extends Component {
  
    constructor(props){
        super(props);
        this.state={
            labels: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009','2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
            data: []
        }
    }

    async fetchData(){
        var response = await axios.get('https://global-warming.org/api/methane-api');
        console.log(response);
        var arr=[];
        console.log("length: " + response.data.methane.length);
        var temp=198;
        for(let i=2000; i<2020; i++){
            var sums=0;
            var avg=0;
            var cnt=0;
            var j=temp;
            console.log("temp" + temp)
            while(parseInt(response.data.methane[j].date)===i){
                sums+=parseInt(response.data.methane[j].average);
                cnt+=1;
                temp+=1;
                j+=1
            }
            avg=parseInt(sums/cnt);
            arr.push(parseInt(avg));
        }
        console.log(arr);
        this.setState({
                data:arr
        })
        console.log(this.state);
    }
    
    componentDidMount(){
        console.log('Mounted in methane');
        console.log(this.state);
        this.fetchData();
    }
    render() {
      return (
            <div className="container" style={{width:'300px'}}>
                <h6 class="methtext">Methane levels from year 2000 to 2019</h6>
                <Line 
                    data={{
                        labels: this.state.labels,
                        datasets: [
                            {
                                label: 'Part per million(ppm)',
                                data: this.state.data,
                                borderColor: [
                                    '#8bc34a ',
                                ],
                                backgroundColor: [
                                    'rgba(0, 256, 0, 0.1)'
                                ],
                                borderWidth: 2,
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
  
