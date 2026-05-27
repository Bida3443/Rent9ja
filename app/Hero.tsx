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
                    <a href='' className='bg-[#C9F967] py-4 px-6 text-[14px] rounded-full text-black transform transition-transform hover:-translate-y-0.5 duration-300 ease-in-out'>List your Property</a>
                    <a href='' className=' py-4 px-8 text-[14px] inline-flex items-center gap-2 border border-white/20 text-[#EFECE2] bg-[#09200D] rounded-full'>Find a home</a>
                </div>

                <div className="mt-2 flex justify-center items-center text-center px-4">

                    <h1 className="text-[#EFECE2] font-extrabold tracking-tight leading-[1.07] text-5xl sm:text-6xl md:text-7xl lg:text-[30px]">

                     <span>0%</span> Agent commission

                        
                        <span className="text-[#C9F967]">₦0 Hidden charges</span>

                        <br className="hidden md:block" />

                        <span>No wahala.</span>

                    </h1>

                </div>
            </div>



        </section>
    )
}