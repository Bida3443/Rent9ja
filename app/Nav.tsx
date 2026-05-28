"use client";

import { link } from 'fs'
import React from 'react'

import { useEffect, useState } from "react";

export default function Nav() {

  const Nav = [
    {
      text: "How it works",
      link: "#Work",
    },
    {
      text: "For Landlords",
      link: "/",
    },
    {
      text: "Pricing",
      link: "/",
    },
  ]

  //   return (

  //     <nav className='bg-[#09200D] py-6 px-10 sticky top-0 h-auto border z-20 border-b-[#8B8B8B]'>
  //       <div className='flex justify-between items-center text-white'>

  //         <a href="/"><h1 className='text-2xl font-extrabold tracking-tight'><span className='text-[#C9F967]'>Rent</span>9ja</h1></a>
  //         <div className='flex gap-5 text-[#B4B8AB] '>
  //           {Nav.map((item,index)=>(

  //             <div key={index} className='hover:text-white transition-all lg:block hidden duration-300'>

  //               <a href={item.link}>
  //                 {item.text}
  //               </a >
  //             </div>
  //           ))}
  //         </div>

  //         <a href='' className='bg-[#C9F967] py-2 px-4 text-[14px] rounded-full text-black transform transition-transform hover:-translate-y-0.5 duration-300 ease-in-out'>List your Property</a>
  //       </div>
  //     </nav>
  //   )
  // }



  const [showBorder, setShowBorder] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {

    const handleScroll = () => {

      const currentScrollY = window.scrollY;

      // scrolling up
      if (currentScrollY < lastScrollY) {
        setShowBorder(true);
      }

      // scrolling down
      else {
        setShowBorder(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, [lastScrollY]);



  return (

    <nav
      className={`sticky top-0 z-20 py-6 px-10 bg-[#09200D] supports-backdrop-filter:bg-[#09200D]/95 backdrop-blur-md transition-all duration-300 ${showBorder
          ? "border-b border-white/10"
          : "border-b border-transparent"
        }`}
    >

      <div className='flex justify-between items-center text-white'>

        <a href="/">
          <h1 className='text-2xl font-extrabold tracking-tight'>
            <span className='text-[#C9F967]'>Rent</span>9ja
          </h1>
        </a>

        <div className='flex gap-5 text-[#B4B8AB]'>

          {Nav.map((item, index) => (

            <div
              key={index}
              className='hover:text-white transition-all lg:block hidden duration-300'
            >

              <a href={item.link}>
                {item.text}
              </a>

            </div>

          ))}

        </div>

        <a
          href=''
          className='bg-[#C9F967] py-2 px-4 text-[14px] rounded-full text-black transform transition-transform hover:-translate-y-0.5 duration-300 ease-in-out'
        >
          List your Property
        </a>

      </div>

    </nav>
  );
}
