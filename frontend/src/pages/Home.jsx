import React from 'react'
import Banner from '../components/homeview/Banner'
import Companies from '../components/homeview/Companies'
import Benefits from '../components/homeview/Benefits'
import Courses from '../components/homeview/Courses'
import Testimonial from '../components/homeview/Testimonial'
import Pricing from '../components/homeview/Pricing'
import Faq from '../components/homeview/Faq'

const Home = () => {
  return (
    <>
      <Banner/>
      <Companies/>
      <Benefits/>
      <Courses/>
      <Testimonial/>
      <Pricing/>
      <Faq/>
    </>
  )
}

export default Home
