import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './compontes/Navbar/Navbar'
import Hero from './compontes/Hero/Hero'
import Program from './compontes/program/Program'
import Title from './compontes/Title/Title'
import About from './compontes/About/About'
import Campus from './compontes/campus/Campus'
import Contac from './compontes/Contac/Contac'
import Footer from './compontes/Footer/Footer'
import Hostel from './compontes/Hostel/hostel'
import Video from './compontes/video/Video'
import FAQSection from './compontes/Info/Accordionltem'
import { useState } from 'react'
import CardSlider from './compontes/CarddddSlide/CardSlider'


function App() {

 const [ play, setplay]=useState(false);

  
  return (


    <>
   
    <div>
     
      <Navbar></Navbar>
     
      <div id='Home'>
          <Hero></Hero>
      </div>
  
       
 
    
        <CardSlider ></CardSlider>
     
      
      <div className='container'>
          <div id='Program'>
            <Title subtitle={'Our Program'} title={'What We Offer'} />
            <Program></Program>
        </div>
        <div id='About'>
            <About setplay={setplay} />
        </div>
       

       <div  id='Campus'>
            <Title subtitle={'Gallery'} title={'Campus Photos'} />
            <Campus></Campus>
       </div>
        
       <div id='Hostel'>
            <Hostel></Hostel>
       </div>
         

          <FAQSection />
       <div id='Contact'>
            <Title subtitle={'Contact us '} title={'Get in Touc'} />

            <Contac></Contac>
       </div>
        

        
          <Footer></Footer>
          <Video play={play} setplay={setplay} />
         
      </div>
       
     
    
      </div>
     
      
    </>
  )
}

export default App
