import React from 'react'
import Hero from './Hero/Hero'
import WhychooseYou from './Hero/WhychooseYou'
import AnaltyticsFeature from './AnlyticsFeature/AnaltyticsFeature'
import Feature from './Feature/Feature'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      
      <WhychooseYou/>
      <AnaltyticsFeature/>
      <Feature/>
      </div>
  )
}

export default Home