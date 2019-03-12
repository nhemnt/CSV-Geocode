import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/custom.css'
import About from './js/components/About'
import Team from './js/components/Team'
import Geocode from './js/components/Geocode'
import NotFound from './js/components/NotFoud'

class App extends Component {
  constructor() {
    super();
  }
  
  render() {
    return(
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Geocode}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/team' component={Team}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </div>
      </Router>
  );
}
}
export default App;
