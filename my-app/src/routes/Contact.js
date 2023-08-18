import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import MainImage4 from '../components/MainImage4'
import Form from '../components/Form'


const Contact = () => {
  return (
    <div>
      <Navbar />
      <MainImage4 heading="CONTACT" text="Let's have a chat!"/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact