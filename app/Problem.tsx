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
                <div className="flex flex-row justify-center gap-5 pt-15 text-white">
                    <div className="py-4 px-10 border space-y-1 border-white/10 flex justify-start flex-col rounded-xl transform transition-transform hover:-translate-y-0.5 duration-300 ease-in-out ">
                        <Image src={Agent} alt="" width={300} height={300} className="h-15 w-18"/>
                        <h1 className="text-[#EFECE2] font-extrabold tracking-tight text-[22px]">10% agent fee</h1>
                        <p className="text-[#9B9F94] text-[14px]">Agents pocket weeks of your rent <br /> before you even unpack.</p>
                    </div>
                    <div className="py-4 px-10 border space-y-1 border-white/10 flex justify-start flex-col rounded-xl transform transition-transform hover:-translate-y-0.5 duration-300 ease-in-out ">
                        <Image src={List} alt="" width={300} height={300} className="h-15 w-18"/>
                        <h1 className="text-[#EFECE2] font-extrabold tracking-tight text-[22px]">Fake listings</h1>
                        <p className="text-[#9B9F94] text-[14px]">Photos that don't match. Properties <br /> that don't exist.</p>
                    </div>
                   <div className="py-4 px-10 border space-y-1 border-white/10 flex justify-start flex-col rounded-xl transform transition-transform hover:-translate-y-0.5 duration-300 ease-in-out ">
                        <Image src={Key} alt="" width={300} height={300} className="h-15 w-18"/>
                        <h1 className="text-[#EFECE2] font-extrabold tracking-tight text-[22px]">No transparency</h1>
                        <p className="text-[#9B9F94] text-[14px]">Hidden charges, vague terms, no <br /> paper trail.</p>
                    </div>
                    <div className="py-4 px-10 border space-y-1 border-white/10 flex justify-start flex-col rounded-xl transform transition-transform hover:-translate-y-0.5 duration-300 ease-in-out ">
                        <Image src={Time} alt="" width={300} height={300} className="h-15 w-18"/>
                        <h1 className="text-[#EFECE2] font-extrabold tracking-tight text-[22px]">Wasted time</h1>
                        <p className="text-[#9B9F94] text-[14px]">Endless inspections that lead <br /> absolutely nowhere.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}