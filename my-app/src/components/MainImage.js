import "./MainImage.css"
import React from 'react'
import IntroImg from '../assets/main.jpg'
import { Link } from "react-router-dom"

const MainImage = () => {
  return (
    <div className="main">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"></img>
        </div>
        <div className="content">
            <h1>Hi, I'm Akshay</h1>
            <div>
                <Link to="/projects" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default MainImage
