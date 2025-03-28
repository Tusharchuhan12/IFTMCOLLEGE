import React from 'react'
import './Title.css'
function Title({ subtitle, title }) {
  return (
    <div className='title'>
      
      <p>{subtitle}</p>
      <h1 className='tit'> {title}</h1>
    </div>
  )
}

export default Title
