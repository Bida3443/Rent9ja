import Image from "next/image"
import Bank from "../public/Bank.png"
import Card from "../public/Card.png"
import Crypto from "../public/Crypto.png"
import USSD from "../public/USSD.png"

export default function Price() {



    return (
        <section id="Price" className="bg-[#09200D] w-full min-h-screen">
            <div className="flex py-25 px-10 flex-col">
                <div className="space-y-5">
                    <p className="text-[#C9F967] text-[13px] font-extrabold tracking-tight">PAYMENTS</p>
                    <h1 className="text-[#EFECE2] font-extrabold tracking-tight leading-[1.07] text-4xl sm:text-6xl md:text-7xl lg:text-[60px]">Pay your way.</h1>
                    <p className="  text-[18px] text-[#B6B9AC] ">Local rails, global options. We take whatever works for you.</p>
                </div>

                <div className="gap-5 pt-15 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div className="border border-white/10 rounded-xl hover:border-white/30 p-6 flex flex-col gap-3 bg-transparent transition-all duration-300 hover:-translate-y-1">

                        <Image
                            src={Bank}
                            alt=""  
                            width={300}
                            height={300}
                            className="h-18 w-18 object-contain"
                        />
                        <h1 className="text-[#EFECE2] font-extrabold tracking-tight text-[22px]">
                           Bank Transfer
                        </h1>
                        <p className="text-[#9B9F94] text-[14px] leading-6">
                            Instant NIBSS transfers from any Nigerian bank.
                        </p>
                    </div>
                    <div className="border border-white/10 rounded-xl p-6 flex flex-col gap-3 bg-transparent transition-all duration-300 hover:border-white/30 hover:-translate-y-1">

                        <Image
                            src={Card}
                            alt=""
                            width={300}
                            height={300}
                            className="h-18 w-18 object-contain"
                        />
                        <h1 className="text-[#EFECE2] font-extrabold tracking-tight text-[22px]">
                           Card Payment
                        </h1>
                        <p className="text-[#9B9F94] text-[14px] leading-6">
                            Verve, Visa, Mastercard — local or international.
                        </p>
                    </div>
                    <div className="border border-white/10 rounded-xl p-6 flex flex-col gap-3 bg-transparent transition-all duration-300 hover:border-white/30 hover:-translate-y-1">

                        <Image
                            src={Crypto}
                            alt=""
                            width={300}
                            height={300}
                            className="h-18 w-18 object-contain"
                        />
                        <h1 className="text-[#EFECE2] font-extrabold tracking-tight text-[22px]">
                            Crypto
                        </h1>
                        <p className="text-[#9B9F94] text-[14px] leading-6">
                            USDT, USDC, BTC — auto-settled in NGN.
                        </p>
                    </div>
                    <div className="border border-white/10 rounded-xl p-6 flex flex-col gap-3 bg-transparent transition-all duration-300 hover:border-white/30 hover:-translate-y-1">

                        <Image
                            src={USSD}
                            alt=""
                            width={300}
                            height={300}
                            className="h-18 w-18 object-contain"
                        />
                        <h1 className="text-[#EFECE2] font-extrabold tracking-tight text-[22px]">
                           USSD / Transfer
                        </h1>
                        <p className="text-[#9B9F94] text-[14px] leading-6">
                            Pay from any phone, no internet required.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}