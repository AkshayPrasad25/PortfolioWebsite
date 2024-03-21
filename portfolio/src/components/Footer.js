import "./Footer.css"
import React, { useEffect } from 'react'
import {FaHome, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa"
import { Link } from "react-router-dom"
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left" data-aos="fade-right">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}} />
                    <div>
                        <p>110, Teachers Colony, Bangalore</p>
                        <p>India</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}} />
                +91-7204021634</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}} />
                akshaywork510@gmail.com</h4>
                </div>
            </div>
            <div className="right" data-aos="fade-right">
                <h4>About Me</h4>
                <p>I'm Akshay Prasad. Aspiring software developer 
                    seeking entry-level opportunities to gain experience and skills in the field. 
                    Eager to learn and contribute to meaningful projects 
                    while developing proficiency in programming and collaboration.
                </p>
                <div className="social">
                    <Link to={"https://www.linkedin.com/in/akshay-prasad-1aa970247/"} ><FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}} /></Link>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Footer
