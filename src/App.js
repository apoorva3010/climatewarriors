import './App.css';
import React, {Component} from 'react';
import Home from './components/home/home';
import Subscription from './components/subscription/subscription';
import Solutions from './components/solutions/solutions';
import Addgraph from './components/graph/addgraph/addgraph';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render(){
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Home}></Route> 
        <Route path='/statistics' component={Addgraph}></Route> 
        </div>
    </Router>
        
  );
}
}

export default App;
