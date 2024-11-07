import React , { useEffect, useRef } from 'react';
import HeroImg from '../assets/Hero.jpg'
import AboutImg from "../assets/About.jpg";
export const Hero = () => {

    return (<div  className="flex flex-col px-6 lg:pl-32  ">

            <div className=" grid grid-cols-1 lg:grid-cols-2 justify-between gap-x-24">
                <div className="flex flex-col">
                    <h1 className=" text-5xl xl:text-6xl text-left  font-bold tracking-wide mt-16 ">AVERISE
                        ADVISORS</h1>
                    <h1 className=" py-2 text-3xl lg:text-4xl text-left font-thin tracking-widest bg-gradient-to-r from-green-500 to-green-900 text-transparent bg-clip-text  dm-serif-text-regular italic">
                        Your Trusted Global Tax Advisor</h1>
                    <p className="tracking-wide text-xl mt-12 text-left items-center max-w-5xl">
                        <span className="font-semibold">Averise Advisors</span> inspired by <span
                        className="font-semibold">"Aver" </span>for conviction and
                        <span className="font-semibold"> "Rise" </span> for growth stands for empowering global
                        businesses to thrive with confidence. We
                        specialize in international tax compliance, transfer pricing strategies, and ESG integration,
                        offering tailored solutions to navigate complex global tax regulations. Our team is committed to
                        helping clients achieve full compliance and a competitive edge, with expert insights on
                        compliance trends and sustainable growth strategies that drive success in today’s dynamic global
                        marketplace.
                    </p>


                    <div className="flex">
                        <a href="/#about"
                           className="mt-12 mb-8 px-10 py-2 text-2xl rounded-xl bg-gradient-to-r from-green-500 to-green-900 text-white border border-green-400 hover:scale-105 transition-all">
                            <h1>Know More</h1>

                        </a>
                    </div>
                </div>
                <div className="-mt-2 mb-4 p-16">
                    <img src={HeroImg} alt="Code Image"
                         className=" w-3/4  rounded-2xl transition-filter duration-700 ease-in-out"/>

                </div>
            </div>
        </div>
    )
}