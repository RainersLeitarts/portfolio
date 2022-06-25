import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about-wrapper'>
        <div className='about-col1'>
            <div className='about-content-wrapper'>
                <h1 className='about-title'>About Me:</h1>
                <p className='about-text'>My name is Rainers Leitarts and I am a 19 year old Full-stack web developer. I like looking for new problems and solving them, that is my passion. That is why coding has alway been fascinating to me. But I never thought I would actually start doing it myself, because it seemed really hard. But I am a person that doesn't always pick the easy route, so I took upon the challenge. I started learning Java and I had a strong drive to become a software engineer. But since I have a pretty strong creative side, I figured that Web-development suits me better. That is when my Web development journey began. I picked up some Web development tools and I certainly do have <span className='about-highlight'>favourites</span>. Since then I have worked on a couple of <span className='about-highlight'>projects</span>, from all of which I learned a lot.</p>
                <div className='about-socials-container'>
                    <div className='about-socials-item'></div>
                    <div className='about-socials-item'></div>
                    <div className='about-socials-item'></div>
                    <div className='about-socials-item'></div>
                </div>
            </div>
        </div>
        <div className='about-col2'></div>
    </div>
  )
}

export default About