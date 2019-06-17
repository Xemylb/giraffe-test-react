import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import './App.css';

// Pages
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
function App() {
  return (
    <Router className="App">
      <Switch>
      <Route exact path="/" exact component={Home} />
      <Route path="/sign-in/" component={SignIn} />
      <Route path="/sign-up/" component={SignUp} />
      <Redirect to="/"></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
