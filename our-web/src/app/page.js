"use client"
import About from '@/components/about'
import Navbar from '@/components/navbar'
import React from 'react'

const page = () => {

  return (
    <div className='bg-white'>
      <Navbar/>  
      <About/>     
    </div>
  )
}
export default page