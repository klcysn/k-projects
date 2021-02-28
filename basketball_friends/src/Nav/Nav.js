import React from "react"

import {
    Link
  } from "react-router-dom";

export default class Nav extends React.Component{
    render(){
        const {home, myProfile} = this.props
        return(
            <div className="nav">
                <Link className="link" to="/">{home}</Link>
                <Link className="link" to="/profile">{myProfile}</Link>
            </div>
        )
    }
}