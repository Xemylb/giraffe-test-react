import React from 'react';
import reducer from './Store';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import './App.css';

// Pages
import Home from './Store/containers/Home'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Post from "./Store/containers/Post";
import PostForm from "./Store/containers/EditPost";

//STORE


const store = createStore(reducer);



function App() {
  return (
      <Provider store={store}>
          <Router className="App">
              <Switch>
                  <Route exact path="/" exact component={Home} />
                  <Route path="/sign-in/" component={SignIn} />
                  <Route path="/sign-up/" component={SignUp} />
                  <Route path="/post/:id" component={Post} />
                  <Route path="/edit/:id" component={PostForm} />
                  <Redirect to="/"></Redirect>
              </Switch>
          </Router>
      </Provider>

  );
}

export default App;
