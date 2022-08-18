import React from 'react'
import ProjectCard from '../../elements/ProjectCard/ProjectCard'
import './Portfolio.css'
import cookbookImg from '../../Images/cookbook.png'
import carrentImg from '../../Images/carrent.png'
import wallofthoughtsImg from '../../Images/wallofthoughts.png'
import projects from './PortfolioData.json'
import ProjectCardAlt from '../../elements/ProjectCardAlt.js/ProjectCardAlt'

const Portfolio = () => {
  console.log(projects.projects[0].title)

  return (
    <div className='portfolio-wrapper' id='portfolio'>
      <div className='portfolio-content-wrapper'>
        <h1 className='portfolio-header'>My projects:</h1>
        <div className='portfolio-content'>
          <ProjectCard demo={projects.projects[0].demo} github={projects.projects[0].github} img={wallofthoughtsImg} title={projects.projects[0].title} description={projects.projects[0].description} />
          <ProjectCard demo={projects.projects[1].demo} github={projects.projects[1].github} img={wallofthoughtsImg} title={projects.projects[1].title} description={projects.projects[1].description} />
          <ProjectCard demo={projects.projects[2].demo} github={projects.projects[2].github} img={wallofthoughtsImg} title={projects.projects[2].title} description={projects.projects[2].description} />
        </div>

        <ProjectCardAlt demo={projects.projects[0].demo} github={projects.projects[0].github} img={wallofthoughtsImg} title={projects.projects[0].title} description={projects.projects[0].description} />
        <ProjectCardAlt demo={projects.projects[1].demo} github={projects.projects[1].github} img={cookbookImg} title={projects.projects[1].title} description={projects.projects[1].description} reverse={true} />
        <ProjectCardAlt demo={projects.projects[2].demo} github={projects.projects[2].github} img={carrentImg} title={projects.projects[2].title} description={projects.projects[2].description} />
      </div>
    </div>
  )
}

export default Portfolio