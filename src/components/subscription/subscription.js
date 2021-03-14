import React, { Component } from 'react';
import './subscription.css';

export default class subscription extends Component {

    render() {
        return (
            <div class="subscription center" id="subscription">
                <br></br>
                <h4 className="white-text"><b>Reach out to Us!</b></h4>
                <p style={{color:'#e0e0e0', fontSize:'16px'}}>Contact us to know more about the ways in which you can contribute</p>
                <br></br>
                <div class="innersub container">
                    <div class="row">
                        <form class="col s12" onSubmit={this.submitHandler}>
                        <div class="row">
                            <div class="input-field col s6">
                            <input id="first_name" type="text" class="validate" required />
                            <label for="first_name">First Name</label>
                            </div>
                            <div class="input-field col s6">
                            <input id="last_name" type="text" class="validate" required/>
                            <label for="last_name">Last Name</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12 m12 l12">
                            <input id="email" type="email" class="validate" required/>
                            <label for="email">Email-ID</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12 m12 l12">
                            <input id="phone" type="number" class="validate" required/>
                            <label for="phone">Phone Number</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12 m12 l12">
                            <textarea id="textarea1" class="materialize-textarea"></textarea>
                            <label for="textarea1">Message</label>
                            </div>
                        </div>
                            <input type="submit" class="btn amber darken-2" style={{textTransform:'lowercase'}} />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
