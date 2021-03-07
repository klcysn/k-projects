import React from 'react';
import './App.css';

class App extends React.Component{
  state = {
    isFocused: false
  }
  handleFocus=()=> this.setState({isFocused: true})
  handleBlur=()=> this.setState({isFocused: false})
  handleIconClick=()=> document.querySelector(".search-input").focus()
  render(){
    return (
      <div className="App">
        <div className="bar-container" style={{width: this.state.isFocused && "80%"}}>
          <i className="fas fa-search" onClick={this.handleIconClick}></i>
          <input className="search-input" onBlur={this.handleBlur} onFocus={this.handleFocus} placeholder="Search Something..."/>
        </div>
      </div>
    );
  }
}

export default App;
