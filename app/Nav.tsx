import { link } from 'fs'
import React from 'react'


export default function Nav() {

  const Nav = [
    {
    text:"How it works",
    link:"/",
  },
  {
    text:"For Landlords",
    link:"/",
  },
  {
    text:"Pricing",
    link:"/",
  },
  ]
   
  return (

    <nav className='bg-[#09200D] py-6 px-10  h-auto'>
      <div className='flex justify-between items-center text-white'>
        
        <a href="/"><h1 className='text-2xl font-body'><span className='text-[#C9F967]'>Rent</span>9ja</h1></a>
        <div className='flex gap-5 text-[#B4B8AB]'>
          {Nav.map((item,index)=>(

            <div key={index}></div>
          ))}
        </div>
        
        <a href='' className='bg-[#C9F967] py-2 px-4 text-[14px] rounded-full text-black transition-all duration-300 transform ease-in-out cursor-pointer'>List your Property</a>
      </div>
    </nav>
  )
}
