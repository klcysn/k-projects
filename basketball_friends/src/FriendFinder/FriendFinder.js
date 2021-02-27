import React from "react"
import "./FriendFinder.scss"
import logo from "../assets/logo.png"


export default class FriendFinder extends React.Component{

    state={
        data : {},
        friends : []
    }

    fetchPeople = () =>{
        fetch("https://randomuser.me/api/").then((friend)=>friend.json()).then((friend)=>this.setState({data: friend.results[0]}))
    }

    addFriend = () =>{
        this.setState({friends: [...this.state.friends, this.state.data]})
    }

    removeFriend = (item) =>{
        this.setState({friends: this.state.friends.filter((friend)=> friend.cell !== item.cell)})
    }

    
    render(){
        console.log(this.state.friends)
        const {name, lastName} = this.props
        return(
            
        <div className="friend-finder">
            <img className="friend-logo" src={this.state.data.picture?.large} alt={this.state.data.name?.first} />
            <h2>{this.state.data.name?.first} {this.state.data.name?.last}</h2>
            <h3>Nationality: {this.state.data?.nat}</h3>
            <div className="button-container">
                <button onClick={this.fetchPeople}>Find a Friend</button>
                <button onClick={this.addFriend}>Add As a Friend</button>
            </div>
            <div>
                {name} {lastName}'s Friends
            </div>
            <div>
                {this.state.friends?.map((friend)=> {
                    return(
                        <div className="friend">
                        <img src={friend.picture.medium} alt="" />
                        <h3>{friend.name?.first} {friend.name?.last}</h3>
                        <button onClick={()=>this.removeFriend(friend)}>Remove</button>
                        </div>
                    )
                })}
            </div>
        </div>
        )
    }
}