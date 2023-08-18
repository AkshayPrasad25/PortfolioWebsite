import React from 'react'
import Navbar from '../components/Navbar'
import MainImage from "../components/MainImage"
import Footer from "../components/Footer"
import Work from "../components/Work"

const Home = () => {
  return (
    <div>
        <Navbar />
        <MainImage />
        <Work />
        <Footer />
    </div>
    
  )
}

export default Home