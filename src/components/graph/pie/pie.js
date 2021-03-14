import React, {Component} from 'react';
import {Line, Pie} from 'react-chartjs-2';
import './pie.css'

export default class pie extends Component {
    render() {
      return (
            <div className="container" style={{width:'300px'}}>
                <Pie 
                    data = {{
                        datasets: [{
                            data: [7.1,35,43,1.8,2,26],
                            backgroundColor: [
                                '#b71c1c',
                                '#ff80ab',
                                '#ea80fc',
                                '#64ffda',
                                '#b2ff59',
                                '#ffd740'
                            ],
                        }],
                    
                        // These labels appear in the legend and in the tooltips when hovering different arcs
                        labels: [
                            'Cheetah',
                            'Leatherback Sea Turtle',
                            'Koala',
                            'Giant Panda',
                            'Monarch Butterfly',
                            'Polar Bear'
                        ],
                        
                    }}
                    height={250}
                    width={300}                     
                    options={{
                        maintainAspectRatio: false,
                    }}/>
            </div>
      );
    }
   }
  
