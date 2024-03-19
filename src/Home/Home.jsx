import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import AboutUs from './AboutUs'
import AppSection from './AppSection'

const Home = () => {
  return (
    <div>
        <Banner/>
        <HomeCategory/>
        <AboutUs/>
        <AppSection/>
    </div>
  )
}

export default Home