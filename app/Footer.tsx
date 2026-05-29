// "use client";

// import { link } from 'fs'
// import React from 'react'

// import { useEffect, useState } from "react";

export default function Nav() {

    const Nav = [
        {
            text: "Privacy",
            link: "#/",
        },
        {
            text: "Terms",
            link: "#/",
        },
        {
            text: "Contact",
            link: "#/",
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



    // const [showBorder, setShowBorder] = useState(false);
    // const [lastScrollY, setLastScrollY] = useState(0);

    // useEffect(() => {

    //     const handleScroll = () => {

    //         const currentScrollY = window.scrollY;

    //         // scrolling up
    //         if (currentScrollY < lastScrollY) {
    //             setShowBorder(true);
    //         }

    //         // scrolling down
    //         else {
    //             setShowBorder(false);
    //         }

    //         setLastScrollY(currentScrollY);
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };

    // }, [lastScrollY]);



    return (
        // <nav
        //     className=" bg-[#020C04] px-3 transition-all duration-300">
        //     <div className='flex lg:flex-row flex-col lg:justify-between justify-start p-10 place-items-center items-center text-white'>
        //         <a href="/">
        //             <h1 className='text-[20px] font-extrabold tracking-tight'>
        //                 <span className='text-[#C9F967]'>Rent</span>9ja
        //             </h1>
        //         </a>
        //         <div className="flex justify-center items-center">
        //             <p className='text-[#91938A] text-[13px]'>
        //             Built in Lagos, for Nigeria.
        //         </p>
        //         </div>
        //         <div className='flex gap-5 text-[#B4B8AB]'>
        //             {Nav.map((item, index) => (
        //                 <div
        //                     key={index}
        //                     className='hover:text-white text-[14px] transition-all duration-300'
        //                 >
        //                     <a href={item.link}>
        //                         {item.text}
        //                     </a>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </nav>

        <nav className="bg-[#020C04] px-3 transition-all duration-300">

  <div className="flex flex-col lg:flex-row items-center justify-between p-6 lg:p-10 text-white gap-4">

    {/* TOP ROW ON MOBILE: logo left + links right */}
    <div className="w-full flex items-center justify-between lg:w-auto">

      {/* LOGO */}
      <a href="/">
        <h1 className="text-[20px] font-extrabold tracking-tight">
          <span className="text-[#C9F967]">Rent</span>9ja
        </h1>
      </a>

      {/* LINKS (RIGHT ON MOBILE) */}
      <div className="flex gap-5 text-[#B4B8AB] lg:hidden">
        {Nav.map((item, index) => (
          <div
            key={index}
            className="hover:text-white text-[14px] transition-all duration-300"
          >
            <a href={item.link}>{item.text}</a>
          </div>
        ))}
      </div>

    </div>

    {/* CENTER TEXT (ONLY CENTERED P TAG ON MOBILE) */}
    <div className="w-full flex justify-center lg:justify-center">
      <p className="text-[#91938A] text-[13px] text-center">
        Built in Lagos, for Nigeria.
      </p>
    </div>

    {/* DESKTOP LINKS */}
    <div className="hidden lg:flex gap-5 text-[#B4B8AB]">
      {Nav.map((item, index) => (
        <div
          key={index}
          className="hover:text-white text-[14px] transition-all duration-300"
        >
          <a href={item.link}>{item.text}</a>
        </div>
      ))}
    </div>

  </div>

</nav>
    );
}
