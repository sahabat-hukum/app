"use client"
import About from '@/components/about'
import Navbar from '@/components/navbar'
import ChatBox from '@/components/chatbox'
import React from 'react'

const page = () => {

  return (
    <div className='bg-white'>
      <Navbar/>  
      <About/>
      <ChatBox/>
    </div>
  )
}
export default page