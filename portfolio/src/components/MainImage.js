import "./MainImage.css"
import React, { useEffect } from 'react'
import IntroImg from '../assets/main.jpg'
import { Link } from "react-router-dom"
import Aos from 'aos'
import 'aos/dist/aos.css'

const MainImage = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);
  return (
    <div className="main">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"></img>
        </div>
        <div className="content">
            <h1 data-aos="flip-right">Hi, I'm Akshay</h1>
            <div>
                <Link to="/projects" className="btn">Projects</Link>
                <Link to="/contact" className="btn">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default MainImage
