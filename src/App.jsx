import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

const App = () => {
  return (
    <>
      <Navbar />
      <div className='px-6 pt-20 mx-auto max-w-7xl'>
        <HeroSection />
      </div>
    </>
  )
}

export default App