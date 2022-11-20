import React from 'react'
import './PageWrapper.scss'

const PageWrapper = ({children}) => {
  return (
    <div className="page_wrapper">
        {children}
    </div>
  )
}

export default PageWrapper