import React from 'react'
import { About,Footer,Skills,Header,Testimonials,Work } from './container'
import { Navbar } from './components'
import './App.scss'
function App() {
  return (
   <div className='app'>
    <Navbar/>
    <Header/>
    <About/>
    <Work/>
    <Skills/>
    {/* <Testimonials/> */}
    <Footer/>
   </div>
  )
}

export default App