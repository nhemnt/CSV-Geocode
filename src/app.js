import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Home from './js/components/Home'
import About from './js/components/About'
import Team from './js/components/Team'
import Header from './js/components/Header'
import NotFound from './js/components/NotFoud'

class App extends Component {
  constructor() {
    super();
  }
  
  render() {
    return(
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={Home}></Route>
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
