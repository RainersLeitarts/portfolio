import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'

const Navbar = () => {
  const [scroll, setScroll] = useState(0)

  //!Turn on spy & fix offsets !!!Smooth scroll is causing the problem

  window.addEventListener('scroll', () => {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const scroll = window.scrollY / 3 / 100
  
    if (vw > 690) {
      setScroll(scroll)
    }
  })

  return (
    <div style={{ borderBottom: `1px solid rgba(0, 0, 0, ${scroll})` }} className='nav-wrapper'>
      <div className='links-container'>
        <div className='hamburger-icon'></div>
        <Link className='nav-link' activeClass="nav-active" spy={true} to="home" smooth={true} offset={-100} duration={200} >HOME</Link>
        <Link className='nav-link' activeClass="nav-active" spy={true} to="about" smooth={true} offset={-100} duration={200} >ABOUT</Link>
        <Link className='nav-link' activeClass="nav-active" spy={true} to="skills" smooth={true} offset={-100} duration={200} >SKILLS</Link>
        <Link className='nav-link' activeClass="nav-active" spy={true} to="portfolio" smooth={true} offset={-100} duration={200} >PORTFOLIO</Link>
      </div>
    </div>
  )
}

export default Navbar