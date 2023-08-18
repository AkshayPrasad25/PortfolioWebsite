import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import MainImage3 from '../components/MainImage3'
import Aboutcontent from '../components/Aboutcontent'


const About = () => {
  return (
    <div>
      <Navbar />
      <MainImage3 heading="ABOUT" text="I'm a Front-End Developer"/>
      <Aboutcontent />
      <Footer />
    </div>
  )
}

export default About