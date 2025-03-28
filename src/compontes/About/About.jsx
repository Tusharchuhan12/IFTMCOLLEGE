import React from 'react'
import "./About.css"

function About({ setplay }) {
  
  return (
    <>
    <div className='about'>
    <div className='about-left'>
      <img src="about.png" alt=""  className='about-img'/>
      <img src="play-icon.png" alt="" className='about-icon'onClick={()=>{
        setplay(true)
      }} />
    </div>
    <div className='about-right'>
        <h2>ABOUT UNIVERSITY</h2>
          <h1>IFTM University</h1>
          <p>• Offers 82 number of Diploma, Undergraduate, Postgraduate and Doctoral Programmes in Engineering, Business Management, Pharmacy, Biotechnology, Microbiology, Arts, Sciences, Commerce, Hotel Management & Catering Technology, Law, Education, Journalism & Mass Communication, Agricultural Science & Engineering and Computer Science & Applications, etc..</p>
          <p>• Besides academics, sports and cultural activities, the University contribute towards the holistic development of students..</p>
       
        <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
       
    </div>
    </div>
  
    </>
  )
}

export default About
