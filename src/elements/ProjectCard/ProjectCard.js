import React from 'react'
import './ProjectCard.css'
import cookbookImg from '../../Images/cookbook.png'

const ProjectCard = ({ img, title, description }) => {
  return (
    <div className='project-card'>
      <div className='project-image-container'>
        <img src={img} className='project-image' />
      </div>
      <div className='project-card-content'>
        <h3 className='project-card-title'>{title}</h3>
        <p className='project-card-text'>{description}</p>
        <div className='card-button-container'>
          <button className='card-button'>Demo page</button>
          <button className='card-button'>Github</button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard