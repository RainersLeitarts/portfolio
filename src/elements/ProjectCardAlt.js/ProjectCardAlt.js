import React from 'react'
import './ProjectCardAlt.css'

const ProjectCardAlt = ({ demo, github, img, title, description, reverse }) => {
  return (
    <div className={`card-container ${reverse && 'reverse'}`}>
        <div style={{backgroundImage: `url(${img})`}} className='card-image'>
            <div className='card-image-overlay'>
                <a className='card-image-overlay-button' href={demo} target='_blank' rel='noreferrer'>DEMO</a>
                <a className='card-image-overlay-button' href={github} target='_blank' rel='noreferrer'>GITHUB</a>
            </div>
        </div>
        <div className='alt-card-content-container'>
            <h1 className='alt-card-title'>{title}</h1>
            <p className='alt-card-text'>{description}</p>
        </div>
    </div>
  )
}

export default ProjectCardAlt