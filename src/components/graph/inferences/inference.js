import React from 'react';
import Pie from '../pie/pie';
import './inference.css';

export default function inference() {
    return (
        <div class="inferences"  id="data">
            <br></br>
            <h5 style={{marginLeft:'1%'}}><b>Inferences</b></h5>
            <p class="grey-text" style={{marginTop:'1%', marginLeft:'1%'}}>Understanding the data!</p><br></br>
            <div class="row">
                <div class="col s12 m5 l5" style={{marginLeft:'-5%'}}><Pie /></div>
                <div class="col s12 m7 l7 grey lighten-3" style={{minHeight:'20vh', marginTop:'4%'}}>
                    <p>Source: <a href="https://onekindplanet.org/top-10/10-adorable-animals-threatened-by-climate-change/#:~:text=Staghorn%20Coral,Red%20List%20of%20Threatened%20Species.">
                    Top 10 Animals Endangered by Climate Change</a></p><br></br>
                    <p>One of the most real and convincing effects of Climate change is the fact that these species have been declared endangered 
                    and might become extinct if no action is taken. Reasons like overexploitation of resources, environmental pollution, loss of habitat etc.
                    contribute to climate change and their endangerment. The data shown in the pie chart represents the number of these species per thousand units.</p>
                </div>
            </div>

            <div class="row">
                <div class="col s12 m5 l5 grey lighten-3" style={{maxHeight:'28vh', height:'28vh', marginTop:'2%', marginLeft:'2%'}}>
                    <h6><u>Carbon Footprint</u></h6><br></br>
                    <p>Carbon footprint is a measure of the impact your activities have on the amount of carbon dioxide (CO2) 
                    produced through the burning of fossil fuels and is expressed as a weight of CO2 emissions produced in tonnes.</p>
                    <p class="blue-text">Check the carbon footprint of some of our <br></br>daily activities! >>></p>
                </div>
                <div class="col s12 m6 l6" style={{marginTop:'1%'}}>
                    <ul class="collection" style={{maxHeight:'30vh'}}>
                        <li class="collection-item"><div>Driving to work<span class="secondary-content">4.3 metric tons</span></div></li>
                        <li class="collection-item"><div>Throwing clothes in the dryer<span class="secondary-content">0.1 metric tons</span></div></li>
                        <li class="collection-item"><div>Working out for 30 mins thrice a week<span class="secondary-content">0.07 metric tons</span></div></li>
                        <li class="collection-item"><div>A 5000-mile round trip<span class="secondary-content">2.23 metric tons</span></div></li>
                        <li class="collection-item"><div>Going on a shopping spree<span class="secondary-content">0.5 metric tons</span></div></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
