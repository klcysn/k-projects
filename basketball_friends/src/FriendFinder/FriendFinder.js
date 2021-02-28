import React from "react"
import "./FriendFinder.scss"
import logo from "../assets/logo.png"


export default class FriendFinder extends React.Component{
    state={
        data : {},
        friends : [],
        show: false
    }
    fetchPeople = () =>{
        fetch("https://randomuser.me/api/").then((friend)=>friend.json()).then((friend)=>this.setState({data: friend.results[0]}))
    }
    
    addFriend = () =>{
        if(!this.state.friends.includes(this.state.data)){
            this.setState({friends: [this.state.data, ...this.state.friends]})
        }else{
            this.setState({show: true})
        }
    }
    
    removeFriend = (item) =>{
        this.setState({friends: this.state.friends.filter((friend)=> friend.cell !== item.cell)})
    }
    
    
    render(){
        const {userName} = this.props.location.state
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
                {userName}'s Friends
            </div>
            <div className="friend-container">
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
           {this.state.show &&
           <div className="snack-bar">
               You have already added <b>{this.state.data.name.first} {this.state.data.name.last}</b>
               <button onClick={()=>this.setState({show: false})}>Ok</button>
            </div>}
        </div>
        )
    }
}