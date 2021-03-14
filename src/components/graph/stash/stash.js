import React from 'react';
import './stash.css';

export default function stash() {
    return (
        <div class="stash" id="stash">
            <br></br>
            <h5 style={{marginLeft:'1%'}}><b>Stash</b></h5>
            <p class="grey-text" style={{marginTop:'1%', marginLeft:'1%'}}>A collection of resources that might scare you into action</p>
            <br></br>
            <div>
                <div class="row">
                    <div class="col s12 m4 l4">
                        <div class="card">
                            <div class="card-image">
                            <img src="https://blogs.imf.org/wp-content/uploads/2018/11/BLOG-1024x600-climateblog-imageBroker-david-MichaSheldon-newscom-ibphotos327958.jpg" />
                            </div>
                            <div class="card-content">
                            <p>A Planet at Risk Requires Multilateral Action
                            </p>
                            </div>
                            <div class="card-action">
                            <a target="_blank" href="https://blogs.imf.org/2018/12/03/a-planet-at-risk-requires-multilateral-action/">Find it here</a>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m4 l4">
                        <div class="card">
                            <div class="card-image">
                            <img src="https://blogs.imf.org/wp-content/uploads/2018/08/BLOG-1024x600-COTW-Electric-Cars-Charging-Berlin-Jens-Kalaene-dpa-picture-alliance-Newscom-dpaphotosthree234895.jpg" />
                            </div>
                            <div class="card-content">
                            <p>Chart of the Week: A Bumpy Road Ahead for Electric Cars</p>
                            </div>
                            <div class="card-action">
                            <a target="_blank" href="https://blogs.imf.org/2018/08/13/chart-of-the-week-a-bumpy-road-ahead-for-electric-cars/">Find it here</a>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m4 l4">
                        <div class="card">
                            <div class="card-image">
                            <img src="https://blogs.imf.org/wp-content/uploads/2018/06/BLOG-1024x600-Polar-Bear-on-Shrinking-Ice-Sven-Erik-Arndt-Universal-Images-Group-Newscom-uigphotos235623.jpguigphotos235623.jpg" />
                            </div>
                            <div class="card-content">
                            <p>5 Things You Need to Know About the IMF and Climate Change</p>
                            </div>
                            <div class="card-action">
                            <a target="_blank" href="https://blogs.imf.org/2018/06/08/5-things-you-need-to-know-about-the-imf-and-climate-change/">Find it here</a>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div class="center"><a class="btn amber black-text"  style={{marginTop:'8%'}} href="#stats" >Back to top</a></div>
                    
                </div>
            </div>
        </div>
    )
}
