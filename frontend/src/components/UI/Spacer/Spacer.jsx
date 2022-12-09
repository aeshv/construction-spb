import React from 'react'
import './Spacer.scss'
const Spacer = ({type}) => {
  return (
    <div className={`spacer ${type}`}/>
  )
}

export default Spacer