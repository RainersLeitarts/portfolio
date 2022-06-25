import React from 'react'
import ProjectCard from '../../elements/ProjectCard/ProjectCard'
import './Portfolio.css'
import cookbookImg from '../../Images/cookbook.png'
import carrentImg from '../../Images/carrent.png'
import projects from './PortfolioData.json'

const Portfolio = () => {
  console.log(projects.projects[0].title)

  return (
    <div className='portfolio-wrapper'>
      <div className='portfolio-content-wrapper'>
        <h1 className='portfolio-header'>Some of the projects I've worked on</h1>

        <div className='portfolio-content'>

          <ProjectCard img={cookbookImg} title={projects.projects[0].title} description={projects.projects[0].description} />
          <ProjectCard img={carrentImg} title={projects.projects[1].title} description={projects.projects[1].description} />
        </div>
      </div>
    </div>
  )
}

export default Portfolio