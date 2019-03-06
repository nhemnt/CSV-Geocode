import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends Component {
  constructor() {
    super();
  }
  
  render() {
    return(
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/about"> About </Link>
            </li>
            <li>
              <Link to="/team"> Team </Link>
            </li>
          </ul>
        </div>
      </Router>
  );
}
}
export default App;
