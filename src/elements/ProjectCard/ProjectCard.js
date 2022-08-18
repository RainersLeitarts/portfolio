import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({ demo, github, img, title, description }) => {
  return (
    <div className='project-card'>
      <div className='project-image-container'>
        <img src={img} className='project-image' />
      </div>
      <div className='project-card-content'>
        <h3 className='project-card-title'>{title}</h3>
        <p className='project-card-text'>{description}</p>
        <div className='card-button-container'>
          <a href={demo} target='_blank' className='card-button'>Demo page</a>
          <a href={github} target='_blank' className='card-button'>Github</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard