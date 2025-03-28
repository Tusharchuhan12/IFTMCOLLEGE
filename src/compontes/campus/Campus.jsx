import React, { useState } from 'react'

import Campus2 from '../Campus2/Campus2'
import "./Campus.css"
function Campus() {
   const [See, Setsee]=useState(false)
   
  return (
    <>
    <div className='campus'>
          <div className='gallery'>
        <img src="Campus1.jpeg" alt="" />
        <img src="Campus2.jpeg" alt="" />
        <img src="Campus3.jpeg" alt="" />
        <img src="Campus4.jpeg" alt="" />
          </div>
        <button className='btn dark' onClick={() => Setsee((prev) => !prev)}> {See ? "Hide IMG" :"See More Here"} 
         
        </button>
    </div>
      {See &&<Campus2 />}
    
    </>
  )
}

export default Campus
