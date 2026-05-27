export default function Hero() {
    return (
        <section className="bg-[#09200D] w-full min-h-screen ">
            <div className=" flex flex-col py-30 justify-center items-center">

                <div className="inline-flex items-center gap-2 border border-white/20 text-[#EFECE2] bg-[#09200D] py-1.5 px-4 rounded-full tracking-[0.18em]">

                    <span className="relative flex h-3 w-3">

                        {/* Ping animation */}
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[#C9F967] opacity-75 animate-ping"></span>

                        {/* Solid dot */}
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-[#C9F967]"></span>

                    </span>

                    <span className="text-[#EFECE2]">BUILT FOR NIGERIA</span>

                </div>


                <div className="mt-8 flex justify-center items-center text-center px-4">

                    <h1 className="text-[#EFECE2] font-extrabold tracking-tight leading-[1.07] text-5xl sm:text-6xl md:text-7xl lg:text-[88px]">

                        Rent a home.

                        <br className="hidden md:block" />

                        <span className="text-[#C9F967]">No agents.</span>

                        <br className="hidden md:block" />

                        <span>No wahala.</span>

                    </h1>

                </div>
                <div className="">
                    <p className="text-[#ABAFA2] lg:text-[20px] text-[18px] mt-5">Rent9ja connects landlords and tenants directly — zero agent <br /> fees, verified listings, and secure payments in Naira or crypto</p>
                </div>
                <div className="flex lg:flex-row justify-center items-center flex-col pt-10 gap-5">
                    
                        <a href='' className='bg-[#C9F967] flex gap-1 items-center py-4 px-6 text-[14px] rounded-full text-black transform transition-transform hover:-translate-y-0.5 duration-300 ease-in-out'>List your Property
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 640 640"
                        className="w-7 h-4"><path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/></svg>

                    </a>
                   
                    <a href='' className=' py-4 px-8 text-[14px] inline-flex items-center gap-2 border border-white/20 text-[#EFECE2] bg-[#09200D] rounded-full'>Find a home</a>
                </div>

                <div className="w-full mt-10 bg-[#001f0a] py-6 px-4 overflow-hidden">

                    <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-4 md:gap-10 text-[#9FA498] text-[12px] md:text-[14px] font-semibold tracking-tight text-center">

                        <span> <span className="text-[#EFECE2]">0%</span> Agent commission</span>

                        <span className=" md:block text-[#4A5C4F]">•</span>

                        <span> <span className="text-[#EFECE2]">₦0</span> Hidden charges</span>

                        <span className=" md:block text-[#4A5C4F]">•</span>
                        {/* <br className="" /> */}

                        <span> <span className="text-[#EFECE2]">NGN + Crypto</span>  payment options</span>

                    </div>

                </div>
            </div>



        </section>
    )
}