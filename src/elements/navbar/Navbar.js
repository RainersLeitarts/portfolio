import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [scroll, setScroll] = useState(0)

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
        <Link className='nav-link' to={'/'} >HOME</Link>
        <Link className='nav-link' to={'/'} >ABOUT</Link>
        <Link className='nav-link' to={'/'} >SKILLS</Link>
        <Link className='nav-link' to={'/'} >PORTFOLIO</Link>
      </div>
    </div>
  )
}

export default Navbar