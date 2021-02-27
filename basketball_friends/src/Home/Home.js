import React from "react"
import logo from "../assets/logo.png"
import "./Home.scss"


export default class Home extends React.Component{
    render(){
        return(
            <div className="home">
                <img className="home-logo" src={logo} alt="logo"/>
                <h2>Basketball Friends</h2>
            </div>
        )
    }
}