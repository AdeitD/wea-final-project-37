import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home";
import Start from "./components/Start";
import Browse from "./components/Browse";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/get-started">Get Started</Link>
          </li>
          <li>
            <Link to="/browse">Browse</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/get-started">
            <Start />
          </Route>
          <Route path="/browse">
            <Browse />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
