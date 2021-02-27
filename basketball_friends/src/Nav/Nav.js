import React from "react"

export default class Nav extends React.Component{
    render(){
        const {home, myProfile} = this.props
        return(
            <div className="nav">
                <span>{home}</span>
                <span>{myProfile}</span>
            </div>
        )
    }
}