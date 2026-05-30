export default function Work() {
    return (
        <section id="Work" className="bg-[#09200D] w-full min-h-screen">
            <div className="flex py-25 lg:px-10 px-5 flex-col">
                <div className="space-y-5">
                    <p className="text-[#C9F967] text-[13px] font-extrabold tracking-tight">HOW IT WORKS</p>
                    <h1 className="text-[#EFECE2] font-extrabold tracking-tight leading-[1.07] text-3xl sm:text-6xl md:text-7xl lg:text-[60px]">Direct. Simple. Yours.</h1>
                </div>
                {/* <div className="text-white flex flex-row justify-center items-center p-40 mt-5 rounded-2xl border border-amber-50">
                    
                    
                </div> */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-15 rounded-xl border border-white/10 overflow-hidden">
                    <div className=" rounded-s-lg border-white/10 transition-all duration-300 hover:bg-[#142519] p-8 object-contain flex h-full flex-col gap-3 bg-transparent ">

                        <h1 className="text-[#335021] text-8xl font-extrabold">01</h1>
                        <h1 className="text-[#EFECE2] font-extrabold tracking-tight text-[22px]">
                            Landlord lists
                        </h1>
                        <p className="text-[#9B9F94] text-[14px] leading-6">
                            Add your property in minutes — photos, price, terms. Free, always.
                        </p>
                    </div>

                    <div className=" border-white/10 h-full transition-all duration-300 hover:bg-[#142519] p-8 flex flex-col gap-3 bg-transparent ">

                        <h1 className="text-[#335021] text-8xl font-extrabold">02</h1>
                        <h1 className="text-[#EFECE2] font-extrabold tracking-tight text-[22px]">
                            Tenants browse & verify
                        </h1>
                        <p className="text-[#9B9F94] text-[14px] leading-6">
                            Real listings, real owners. Verified IDs and addresses on every side.
                        </p>
                    </div>

                   <div className=" border-white/10 h-full transition-all duration-300 hover:bg-[#142519] p-8 flex flex-col gap-3 bg-transparent ">

                        <h1 className="text-[#335021] text-8xl font-extrabold">03</h1>
                        <h1 className="text-[#EFECE2] font-extrabold tracking-tight text-[22px]">
                            Pay securely
                        </h1>
                        <p className="text-[#9B9F94] text-[14px] leading-6">
                            Naira, card, USSD or crypto — held in escrow until you move in.
                        </p>
                    </div>

                    <div className=" border-white/10 h-full transition-all duration-300 hover:bg-[#142519] p-8 flex flex-col gap-3 bg-transparent ">

                        <h1 className="text-[#335021] text-8xl font-extrabold">04</h1>
                        <h1 className="text-[#EFECE2] font-extrabold tracking-tight text-[22px]">
                            Move in
                        </h1>
                        <p className="text-[#9B9F94] text-[14px] leading-6">
                            Sign your digital tenancy, get the keys, settle in. Zero middlemen.
                        </p>
                    </div>

                </div>
            </div>

        </section>
    )
}