import React from 'react'
import './Home.css'
import home_img from '../../Images/1.png'

const Home = () => {
  return (
    <div className='home-wrapper'>
      <div className='content-wrapper'>
        <div className='left-col'>
          <div className='home-content' >
            <h1 className='home-h1'>Hello, I am Rainers</h1>
            <p className='home-p'>a Full-stack Web Developer</p>
          </div>
        </div>
        <div className='right-col'>
          <img id='home-img' src={home_img} alt={'test'} />
        </div>
      </div>
    </div>
  )
}

export default Home