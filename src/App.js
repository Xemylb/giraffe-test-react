import React from 'react';
import reducer from './Store';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import './App.css';

// Pages
import Home from './Store/containers/Home'
import SignIn from './Store/containers/SignIn'
import SignUp from './Store/containers/SignUp'
import Post from "./Store/containers/Post";
import PostForm from "./Store/containers/CreatePost";

//Router

import PrivateRoute from './Store/containers/PrivateRoute'

//STORE


const store = createStore(reducer);


function App() {
  return (
      <Provider store={store}>
          <Router className="App">
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/login" name="login" component={SignIn} />
                  <Route path="/sign-up" name="signUp" component={SignUp} />
                  <Route path="/post/:id" component={Post} />
                  {/* <Route path="/edit/:id" component={PostForm} /> */}
                  <PrivateRoute path="/create" component={PostForm} />
                  <Redirect to="/"></Redirect>
              </Switch>
          </Router>
      </Provider>

  );
}

export default App;
