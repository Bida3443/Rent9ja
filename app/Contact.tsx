export default function Contact() {
    return (
        <section id="Contact" className="bg-[#09200D] scroll-mt-28 w-full ">
          <div className="px-10 pb-30">
             {/* <div className="flex lg:flex-row flex-col items-center gap-15  bg-[#C9F967] p-0 py-20 px-10 rounded-3xl ">
                <div>
                        <h1 className="font-extrabold tracking-tight leading-[1.07] text-4xl sm:text-6xl md:text-7xl lg:text-[60px]">Stop paying <br /> agents. <br /> Start living better.</h1>
                </div>

              <div className="gap-3 flex lg:flex-row flex-col ">
                  <div>
                    <form action="" className="border-2 border-[#ACD759] bg-[#B5E25D] rounded-full py-3 px-8">
                        <input type="text" placeholder="you@email.com" />
                    </form>
                </div>
                <div>
                    <a href='' className='bg-[#09200D] flex gap-1 items-center py-4 px-6 text-[14px] rounded-full text-white transform transition-transform hover:-translate-y-0.5 duration-300 ease-in-out'>List your Property
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 640 640"
                        className="w-7  h-4 stroke-white fill-white"><path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/></svg>

                    </a>
                </div>
              </div>
           </div> */}

        <div className="bg-[#C9F967] rounded-4xl px-6 py-12 md:px-10 md:py-14">

  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

    {/* LEFT: TEXT */}
    <div className="w-full lg:w-1/2">
      <h1 className="text-[#09200D] font-extrabold tracking-tight leading-[0.95] text-4xl sm:text-5xl md:text-6xl lg:text-[60px]">
  Stop paying agents.
  <br />
  Start living better.
</h1>
    </div>

    {/* RIGHT: FORM */}
    <div className="w-full lg:w-1/2 flex flex-col lg:flex-row items-stretch gap-4">

      <input
        type="email"
        placeholder="you@example.com"
        className="w-full lg:w-70 bg-[#B5E25D] border-2 border-[#ACD759] rounded-full py-4 px-6 outline-none text-[#09200D]"
      />

      <a
        href="#contact"
        className="w-full lg:w-auto bg-[#09200D] flex justify-center items-center gap-2 py-4 px-6 rounded-full text-white transition-all duration-300 hover:-translate-y-0.5"
      >
        Join the waitlist
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          className="w-5 h-5 fill-white"
        >
          <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/>
        </svg>

      </a>

    </div>

  </div>

</div>
          </div>

        </section>
    )
}