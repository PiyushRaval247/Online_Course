import React from 'react'
import bannericon from "../../assets/bannericon.png"
import { NavLink } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='pt-20 pb-[100px] max-w-[643px] mx-auto text-center block'>
    <div className="flex items-center relative before:content-[url('/AbstractLine.png')] before:absolute before:top-[-30px] before:left-[-30px] before:animate-fade pr-6 pl-3 py-3 justify-center gap-[10px] bg-white rounded-[8px]">
        <img src={bannericon} alt="" className='h-12' />
      <h1><span className='text-[#FF9500]'>Unlock </span>Your Creative Potential</h1>
    </div>
    <h2 className='mt-[16px] mb-[6px]'>with Online Design and Development Courses.</h2>
    <p>Learn from Industry Experts and Enhance Your Skills.</p>
    <div className='flex justify-center w-full mt-[50px] gap-3'>
        <NavLink className="btn btn-primary">Explore Courses</NavLink>
        <NavLink className="btn btn-secondary bg-white">View Pricing</NavLink>
    </div>
    </div>
  )
}

export default Banner
