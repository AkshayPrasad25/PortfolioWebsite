import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import MainImage3 from '../components/MainImage3'
import Aboutcontent from '../components/Aboutcontent'
import MainImage5 from '../components/MainImage5'


const About = () => {
  return (
    <div>
      <Navbar />
      <MainImage3 heading="ABOUT" text="I'm a Software & Web Developer"/>
      <Aboutcontent />
      <MainImage5 />
      <Footer />
    </div>
  )
}

export default About