import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import MainImage2 from '../components/MainImage2'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <div>
      <Navbar />
      <MainImage2 heading="PROJECTS" text="Some of my recent works"/>
      <ProjectCard />
      <Footer />
    </div>
  )
}

export default Projects