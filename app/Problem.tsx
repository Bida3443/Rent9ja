import Image from "next/image"
import Agent from "../public/Agent.png"
import List from "../public/List.png"
import Key from "../public/key.png"
import Time from "../public/time.png"

export default function Problem() {



    return (
        <section className="bg-[#142519] w-full min-h-screen">
            <div className="flex py-25 px-10 flex-col">
                <div className="space-y-5">
                    <p className="text-[#C9F967] text-[13px] font-extrabold tracking-tight">THE PROBLEM</p>
                    <h1 className="text-[#EFECE2] font-extrabold tracking-tight leading-[1.07] text-4xl sm:text-6xl md:text-7xl lg:text-[60px]">Agents are taking too <br /> much from Nigerians.</h1>
                </div>

                <div className="gap-5 pt-15 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div className="border border-white/10 rounded-xl hover:border-white/30 p-6 flex flex-col gap-3 bg-transparent transition-all duration-300 hover:-translate-y-1">

                        <Image
                            src={Agent}
                            alt=""
                            width={300}
                            height={300}
                            className="h-18 w-18 object-contain"
                        />
                        <h1 className="text-[#EFECE2] font-extrabold tracking-tight text-[22px]">
                            10% agent fee
                        </h1>
                        <p className="text-[#9B9F94] text-[14px] leading-6">
                            Agents pocket weeks of your rent before you even unpack.
                        </p>
                    </div>
                    <div className="border border-white/10 rounded-xl p-6 flex flex-col gap-3 bg-transparent transition-all duration-300 hover:border-white/30 hover:-translate-y-1">

                        <Image
                            src={List}
                            alt=""
                            width={300}
                            height={300}
                            className="h-18 w-18 object-contain"
                        />
                        <h1 className="text-[#EFECE2] font-extrabold tracking-tight text-[22px]">
                            Fake listings
                        </h1>
                        <p className="text-[#9B9F94] text-[14px] leading-6">
                            Photos that don't match. Properties that don't exist.
                        </p>
                    </div>
                    <div className="border border-white/10 rounded-xl p-6 flex flex-col gap-3 bg-transparent transition-all duration-300 hover:border-white/30 hover:-translate-y-1">

                        <Image
                            src={Key}
                            alt=""
                            width={300}
                            height={300}
                            className="h-18 w-18 object-contain"
                        />
                        <h1 className="text-[#EFECE2] font-extrabold tracking-tight text-[22px]">
                            No transparency
                        </h1>
                        <p className="text-[#9B9F94] text-[14px] leading-6">
                            Hidden charges, vague terms, no paper trail.
                        </p>
                    </div>
                    <div className="border border-white/10 rounded-xl p-6 flex flex-col gap-3 bg-transparent transition-all duration-300 hover:border-white/30 hover:-translate-y-1">

                        <Image
                            src={Time}
                            alt=""
                            width={300}
                            height={300}
                            className="h-18 w-18 object-contain"
                        />
                        <h1 className="text-[#EFECE2] font-extrabold tracking-tight text-[22px]">
                            Wasted time
                        </h1>
                        <p className="text-[#9B9F94] text-[14px] leading-6">
                            Endless inspections that lead absolutely nowhere.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}