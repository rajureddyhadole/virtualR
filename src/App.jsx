import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'

const App = () => {
  return (
    <>
      <Navbar />
      <div className='px-6 pt-20 mx-auto max-w-7xl'>
        <HeroSection />
        <FeatureSection />
        <Workflow />
      </div>
    </>
  )
}

export default App