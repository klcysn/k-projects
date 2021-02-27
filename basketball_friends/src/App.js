import React from "react"
import Nav from "./Nav/Nav"
import Home from "./Home/Home"
import FriendFinder from "./FriendFinder/FriendFinder"
import MyProfile from "./MyProfile/Myprofile"
import './App.scss';



class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Nav home="Home"  myProfile="My Profile"/>
        <Home/>
        <FriendFinder name="Yasin" lastName="Kilic"/>
        <MyProfile/>
      </div>
    );
  }
}

export default App;
