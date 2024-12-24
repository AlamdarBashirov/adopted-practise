import React from 'react'
import Layout from '../../layout/Layout'
import IntroSection from './sections/introSection/IntroSection'
import AdoptChild from './sections/adoptChild/AdoptChild'
import FeaturedSection from './sections/featuredSection/FeaturedSection'
import DummySection from './sections/dummySection/DummySection'

const Home = () => {
  return (
    <div>
        <Layout>
            <IntroSection/>
            <DummySection/>
            <AdoptChild/>
            <FeaturedSection/>
        </Layout>
    </div>
  )
}

export default Home