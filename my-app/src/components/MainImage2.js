import "./MainImage2.css"
import React, { Component } from 'react'
// import proj from "../assets/projpics.jpg"

class MainImage2 extends Component {
    render() {
        return (
    <div className="main-img">
        <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
    </div>
  );
    }
  
}

export default MainImage2

/* <img className="into" src={proj} alt="proj"></img> */