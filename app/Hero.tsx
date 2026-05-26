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

                    <span>BUILT FOR NIGERIA</span>

                </div>
                <div className="">
                    <h1 className="text-white text-[88px]">Rent a home. <br /><span>No agents.</span> <br />No wahala.</h1>
                    
                </div>
            </div>



        </section>
    )
}