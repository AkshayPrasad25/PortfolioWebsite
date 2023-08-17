import "./MainImage4.css"
import React, { Component } from 'react'

class MainImage4 extends Component {
    render() {
        return (
    <div className="main-img2">
        <div className="heading2">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
    </div>
  );
    }
  
}

export default MainImage4