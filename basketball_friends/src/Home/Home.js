import React from "react"
import logo from "../assets/logo.png"
import "./Home.scss"


export default class Home extends React.Component{
    state={
        userName: ""
    }
    onClickHandler = () =>{
        this.props.history.push({pathname: "/friend-finder", state: {userName: this.state.userName}})
        
    }
    
    onChangeHandler = (event)=>{
        this.setState({userName: event.target.value})
        
    }
    render(){
        return(
            <div className="home">
                <img className="home-logo" src={logo} alt="logo"/>
                <h2>Basketball Friends</h2>
                <input className="home-input" onChange={this.onChangeHandler} />
                <button onClick={this.onClickHandler}>Submit</button>
            </div>
        )
    }
}