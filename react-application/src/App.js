import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Start() {
  return (
    <div>
      <h2>Get Started</h2>
    </div>
  );
}

function Browse() {
  return (
    <div>
      <h2>Browse</h2>
    </div>
  );
}

export default App;
