import React from "react"
import "./MyProfile.scss"


export default class MyProfile extends React.Component{
    render(){
        return (
          <div className="my-profile">
            <div>My Info</div>
            <div>My Friends</div>
          </div>
        );
    }
}