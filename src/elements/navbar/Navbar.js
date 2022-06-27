import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'

const Navbar = () => {
  const [scroll, setScroll] = useState(0)
  const [open, setOpen] = useState(false)

  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

  //find a way to animate mobile nav without scroll glitches
  
  useEffect(() => {
    console.log(vw)
    if (vw < 690) {
      console.log('here')
      setScroll(1)
    }
  }, [vw])

  window.addEventListener('scroll', () => {
    const scroll = window.scrollY / 3 / 100

    if (vw > 690) {
      setScroll(scroll)
    }
  })

  const openHandler = () => {
    setOpen(prev => {
      return !prev
    })
  }

  const closeHandler = () => {
    setOpen(false)
  }

  return (
    <div style={{ borderBottom: `1px solid rgba(0, 0, 0, ${scroll})` }} className='nav-wrapper'>
      <div className='links-container'>
        <div onClick={openHandler} className='hamburger-container'>
          <div className={`hamburger ${open ? 'open' : ''}`} />
        </div>
        <div onClick={closeHandler} className={`mobile-nav ${open ? 'open' : ''}`}>
          <Link onClick={closeHandler} className='mobile-nav-link' activeClass="nav-active" spy={true} to="home" smooth={'easeInOutQuart'} offset={-101} duration={500} >HOME</Link>
          <Link onClick={closeHandler} className='mobile-nav-link' activeClass="nav-active" spy={true} to="about" smooth={'easeInOutQuart'} offset={-100} duration={500} >ABOUT</Link>
          <Link onClick={closeHandler} className='mobile-nav-link' activeClass="nav-active" spy={true} to="skills" smooth={'easeInOutQuart'} offset={-100} duration={500} >SKILLS</Link>
          <Link onClick={closeHandler} className='mobile-nav-link' activeClass="nav-active" spy={true} to="portfolio" smooth={'easeInOutQuart'} offset={-100} duration={500} >PORTFOLIO</Link>
        </div>

        <Link className='nav-link' activeClass="nav-active" spy={true} to="home" smooth={'easeInOutQuart'} offset={-101} duration={500} >HOME</Link>
        <Link className='nav-link' activeClass="nav-active" spy={true} to="about" smooth={'easeInOutQuart'} offset={-100} duration={500} >ABOUT</Link>
        <Link className='nav-link' activeClass="nav-active" spy={true} to="skills" smooth={'easeInOutQuart'} offset={-100} duration={500} >SKILLS</Link>
        <Link className='nav-link' activeClass="nav-active" spy={true} to="portfolio" smooth={'easeInOutQuart'} offset={-100} duration={500} >PORTFOLIO</Link>
      </div>
    </div>
  )
}

export default Navbar