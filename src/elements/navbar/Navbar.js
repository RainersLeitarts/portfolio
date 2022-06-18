import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [scroll, setScroll] = useState(0)
    
  window.addEventListener('scroll', () => {
    const scroll = window.scrollY / 3 / 100
    setScroll(scroll)
  })

    return (
        <div style={{borderBottom: `1px solid rgba(0, 0, 0, ${scroll})`}} className='nav-wrapper'>
            <div className='links-container'>
                <Link className='nav-link' to={'/'} >HOME</Link>
                <Link className='nav-link' to={'/'} >SKILLS</Link>
                <Link className='nav-link' to={'/'} >PORTFOLIO</Link>
                <Link className='nav-link' to={'/'} >CONTACTS</Link>
            </div>
        </div>
    )
}

export default Navbar