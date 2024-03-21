import { Link } from "react-router-dom"
import "./MainImage5.css"
import React from 'react'
import aventus from "../assets/aventus.jpg"
import hackoverflow from "../assets/hackoverflow.jpg"
import sentinel from "../assets/sentinel.png"

const Aboutcontent = () => {
  return (
    <div className="about1">
        <div className="left1">
            <h1> Achievements and Honors</h1>
            <p>Secured grand prize in Aventus a National-level hackathon conducted by Dayananda Sagar College of Engineering,
                 Secured 1st place in Hack-Overflow National-level Web development hackathon conducted by RNSIT,
                 Secured first runners up in Sentinel Hack 4.0 National-level hacktahon conducted by KS Institiute of Technology,
                 Secured 3rd place in a hackathon conducted by IEEE BNMIT.
            </p>
            <Link to={"https://www.linkedin.com/in/akshay-prasad-1aa970247/"}>
                <button className="btn">LinkedIn</button>
            </Link>
        </div>
        <div className="right1">
            <div className="img-container1">
                <div className="img-stack top1">
                    <img src={aventus} className="img1" alt="aventus"/>
                </div>
                <div className="img-stack bottom1">
                    <img src={hackoverflow} className="img1" alt="hackoverflow"/>
                </div>
                
            </div>
            <div className="img-next">
                    <img src={sentinel} className="img1" alt="sentinel"/>
                </div>
        </div>
    </div>
  )
}

export default Aboutcontent