import React from "react"
import Nav from "./Nav/Nav"
import Home from "./Home/Home"
import FriendFinder from "./FriendFinder/FriendFinder"
import MyProfile from "./MyProfile/Myprofile"
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Nav home="Home" myProfile="My Profile" />
          <Switch>
            <Route path="/friend-finder" component={FriendFinder} exact />
            <Route path="/profile" component={MyProfile} exact />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
