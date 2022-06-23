import React from 'react'
import './PageWrapper.css'

const PageWrapper = ({ children }) => {
  console.log(children)
  return (
    <div className='page-wrapper-outer'>
      <div className='page-wrapper'>{children}</div>
    </div>
  )
}

export default PageWrapper