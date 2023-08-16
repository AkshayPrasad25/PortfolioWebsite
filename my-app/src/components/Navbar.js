import { Link } from "react-router-dom"
import "./Navbar.css"
import React from 'react'
import {FaBars} from "react-icons/fa"

const Navbar = () => {
  return (
    <div className="header">
        <Link to="./">
            <h1>Portfolio</h1>
        </Link>
        <ul className="NavMenu">
            <li><Link to="./">Home</Link></li>
            <li><Link to="./projects">Projects</Link></li>
            <li><Link to="./about">About</Link></li>
            <li><Link to="./contact">Contact</Link></li>
        </ul>
        <div className="dropdown">
            <FaBars size={20} style={{color: "#fff"}} />
        </div>
    </div>
  )
}

export default Navbar