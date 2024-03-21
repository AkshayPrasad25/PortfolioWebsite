import { Link } from "react-router-dom"
import "./Aboutcontent.css"
import React from 'react'
import dev from "../assets/dev.jpg"
import react1 from "../assets/react2.webp"

const Aboutcontent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1> Who Am I?</h1>
            <p>I'm a versatile and innovative developer with skill
                set in front-end development, Google Cloud Platform, and Python, makes me
                capable of turning ideas into interactive 
                realities that leave a lasting impact.
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={dev} className="img" alt="dev"/>
                </div>
                <div className="img-stack bottom">
                    <img src={react1} className="img" alt="react1"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutcontent