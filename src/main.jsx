import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
  


import Hero from './compontes/Hero/Hero'
import Program from './compontes/program/Program'

import About from './compontes/About/About'
import Campus from './compontes/campus/Campus'
import Hostel from './compontes/Hostel/hostel.jsx'
import Contac from './compontes/Contac/Contac'


const router = createBrowserRouter([{
  path: '/',
  element: <App />,

  children: [
    {
      path: 'Home',
      element: <Hero></Hero>
    },
  
    {
      path: 'Progarm',
      element: <Program></Program>
    },
    {
      path: 'about',
      element:  <About></About>
    },
   
    {
      path: 'hostel',
      element:  <Hostel></Hostel>

    },
    {
      path: 'contact',
      element: <Contac></Contac>
    },
    {
      path: 'campus',
      element: <Campus></Campus>
    },


  ]


}])





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
