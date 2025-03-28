import React from 'react'
import './Program.css'

function Program() {
  return (
   
      <div className='Programs' >
      <div className='progarm'>
        <img src="program-1.png" alt="" />
         <div className='caption'>
            <img src="program-icon-1.png" alt="hh" />
            <p> Gradution Degree</p>
         </div>
      </div>
      <div className='progarm'>
        <img src="program-2.png" alt="" />
              <div className='caption'>
                  <img src="program-icon-2.png" alt="" />
                  <p> Master Degree</p>
              </div>
      </div>
      <div className='progarm'>
        <img src="program-3.png" alt="" />
              <div className='caption'>
                  <img src="program-icon-3.png" alt="" />
                  <p> Post Graduation</p>
              </div>
      </div>
    </div>
  

  )
}

export default Program
