import React from 'react'
import './About.css'
import about_img from '../../Images/me.png'
import linkedin_img from '../../Images/linkedin.png'
import github_img from '../../Images/github.png'

const About = () => {
  return (
    <div className='about-wrapper'>
        <div className='about-col1'>
            <div className='about-content-wrapper'>
                <h1 className='about-title'>About Me:</h1>
                <p className='about-text'>My name is Rainers Leitarts and I am a 19 year old Full-stack web developer based in Latvia. I like looking for new problems and solving them, that is my passion. That is why coding has alway been fascinating to me. And since I have a pretty strong creative side, I figured that Web-development suits me. So I began my Web development journey. I picked up some Web development tools and I certainly do have <span className='highlight-container'><span className='about-highlight'>favourites</span></span>. I have worked on a couple of <span className='highlight-container'><span className='about-highlight'>projects</span></span>, from all of which I learned a lot.</p>
                <div className='about-socials-container'>
                    <span>Find me on: </span>
                    <img src={linkedin_img} />
                    <img src={github_img} />
                </div>
            </div>
        </div>
        <div className='about-col2'>
            <img id='about-img' src={about_img} alt={'about_img'} />
        </div>
    </div>
  )
}

export default About