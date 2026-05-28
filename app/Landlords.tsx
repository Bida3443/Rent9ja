export default function Landlords() {
    return (
        <section id="Landlords" className="bg-[#142519] w-full min-h-screen">
            <div className="flex py-25 px-10 flex-col">
                <div className="space-y-5">
                    <p className="text-[#C9F967] text-[13px] font-extrabold tracking-tight">Features</p>
                    <h1 className="text-[#EFECE2] font-extrabold tracking-tight leading-[1.07] text-4xl sm:text-6xl md:text-7xl lg:text-[60px]">Everything you need. <br /> Nothing you don't.</h1>
                </div>
                {/* <div className="text-white flex flex-row justify-center items-center p-40 mt-5 rounded-2xl border border-amber-50">
                    
                    
                </div> */}

                 <div className="gap-5 pt-15 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="border border-white/10 bg-[#102314] rounded-xl hover:border-white/30 p-6 flex flex-col gap-3  transition-all duration-300 hover:-translate-y-1">

                        <button className=" border border-white/10 bg-[#102314] text-[12px] p-1 w-22 rounded-2xl text-center items-center text-[#B6B9AC] ">LANDLORD</button>

                        <h1 className="text-[#EFECE2] font-extrabold tracking-tight text-[22px]">
                            Free to list
                        </h1>
                        <p className="text-[#9B9F94] text-[14px] leading-6">
                            Post unlimited properties at zero cost. Pay nothing until you rent.
                        </p>
                    </div>
                    <div className="border border-white/10 rounded-xl p-6 flex flex-col gap-3 bg-[#102314] transition-all duration-300 hover:border-white/30 hover:-translate-y-1">

                       <button className=" border border-white/10 bg-[#102314] text-[12px] p-1 w-22 rounded-2xl text-center items-center text-[#B6B9AC] ">TENANT</button>
                        <h1 className="text-[#EFECE2] font-extrabold tracking-tight text-[22px]">
                            Verified listings
                        </h1>
                        <p className="text-[#9B9F94] text-[14px] leading-6">
                            Photos that don't match. Properties that don't exist.
                        </p>
                    </div>

                    <div className="border border-white/10 rounded-xl p-6 flex flex-col gap-3 bg-[#102314] transition-all duration-300 hover:border-white/30 hover:-translate-y-1">

                        <button className=" border border-white/10 bg-[#102314] text-[12px] p-1 w-22 rounded-2xl text-center items-center text-[#B6B9AC] ">SECURITY</button>
                        <h1 className="text-[#EFECE2] font-extrabold tracking-tight text-[22px]">
                            Escrow payments
                        </h1>
                        <p className="text-[#9B9F94] text-[14px] leading-6">
                            Your money is safe with us until you've got the keys in hand.
                        </p>
                    </div>
                     <div className="border border-white/10 rounded-xl p-6 flex flex-col gap-3 bg-[#102314] transition-all duration-300 hover:border-white/30 hover:-translate-y-1">

                        <button className=" border border-white/10 bg-[#102314] text-[12px] p-1 w-20 rounded-2xl text-center items-center text-[#B6B9AC] ">LEGAL</button>
                        <h1 className="text-[#EFECE2] font-extrabold tracking-tight text-[22px]">
                            Digital tenancy agreement
                        </h1>
                        <p className="text-[#9B9F94] text-[14px] leading-6">
                            Legally-binding contracts signed online in under five minutes.
                        </p>
                    </div>
                     <div className="border border-white/10 rounded-xl p-6 flex flex-col gap-3 bg-[#102314] transition-all duration-300 hover:border-white/30 hover:-translate-y-1">

                        <button className=" border border-white/10 bg-[#102314] text-[12px] p-1 w-22 rounded-2xl text-center items-center text-[#B6B9AC] ">PAYMENTS</button>
                        <h1 className="text-[#EFECE2] font-extrabold tracking-tight text-[22px]">
                            Crypto-friendly
                        </h1>
                        <p className="text-[#9B9F94] text-[14px] leading-6">
                            Pay rent in USDT, USDC or BTC — instantly converted on-chain.
                        </p>
                    </div>
                     <div className="border border-white/10 rounded-xl p-6 flex flex-col gap-3 bg-[#102314] transition-all duration-300 hover:border-white/30 hover:-translate-y-1">

                        <button className=" border border-white/10 bg-[#102314] text-[12px] p-1 w-22 rounded-2xl text-center items-center text-[#B6B9AC] ">SUPPORT</button>
                        <h1 className="text-[#EFECE2] font-extrabold tracking-tight text-[22px]">
                            Dispute resolution
                        </h1>
                        <p className="text-[#9B9F94] text-[14px] leading-6">
                            Real humans on standby to mediate any issue, fast.
                        </p>
                    </div>
                    

                </div>
            </div>

        </section>
    )
}