import React from "react"
import "./FriendFinder.scss"
import logo from "../assets/logo.png"


export default class FriendFinder extends React.Component{
    render(){
        const {name, lastName} = this.props
        return(
            
        <div className="friend-finder">
            <img className="friend-logo" src={logo} alt="human" />
            <div>
            Kişi bilgileri
            </div>
            <h2>{name} {lastName}</h2>
            <div className="button-container">
                <button>Find a Friend</button>
                <button>Add a Friend</button>
            </div>
        </div>
        )
    }
}