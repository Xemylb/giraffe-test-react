import React from 'react';
import reducer from './Store';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import './App.css';

// Pages
import Home from './Store/containers/Home'
import SignIn from './Store/containers/SignIn'
import SignUp from './Pages/SignUp'
import Post from "./Store/containers/Post";
import PostForm from "./Store/containers/CreatePost";

//STORE


const store = createStore(reducer);



function App() {
  return (
      <Provider store={store}>
          <Router className="App">
              <Switch>
                  <Route exact path="/" exact component={Home} />
                  <Route path="/login" name="login" component={SignIn} />
                  <Route path="/sign-up" component={SignUp} />
                  <Route path="/post/:id" component={Post} />
                  {/* <Route path="/edit/:id" component={PostForm} /> */}
                  <Route path="/create" component={PostForm} />
                  <Redirect to="/"></Redirect>
              </Switch>
          </Router>
      </Provider>

  );
}

export default App;
