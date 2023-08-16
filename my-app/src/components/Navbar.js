import { Link } from "react-router-dom"
import "./Navbar.css"
import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY>=100){
      setColor(true);
    }
    else{
      setColor(false);
    }
  }

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="./">
            <h1>Portfolio</h1>
        </Link>
        <ul className={click ? ("NavMenu active") : ("NavMenu")}>
            <li><Link to="./">Home</Link></li>
            <li><Link to="./projects">Projects</Link></li>
            <li><Link to="./about">About</Link></li>
            <li><Link to="./contact">Contact</Link></li>
        </ul>
        <div className="dropdown" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: "#fff"}} />) : (<FaBars size={20} style={{color: "#fff"}} />)}
            
        </div>
    </div>
  )
}

export default Navbar