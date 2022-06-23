import React from 'react'

const PageWrapper = ( {children} ) => {
  console.log(children)
  return (
    <div className='page-wrapper'>{ children }</div>
  )
}

export default PageWrapper