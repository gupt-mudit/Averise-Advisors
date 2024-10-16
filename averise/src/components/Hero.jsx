import React , { useEffect, useRef } from 'react';
import HeroImg from '../assets/Hero.jpg'
import AboutImg from "../assets/About.jpg";
export const Hero = () => {

    return (<div className="flex flex-col px-6 md:pl-32 -mt-12">
            <h1 className=" text-6xl lg:text-8xl text-left  tracking-wide">WE ARE AVERISE</h1>
            <div className=" grid grid-cols-1 md:grid-cols-2 justify-between gap-x-20">
                <div className="flex flex-col">

                    <h1 className=" py-2 text-4xl lg:text-6xl text-left tracking-widest bg-gradient-to-r from-green-500 to-green-900 text-transparent bg-clip-text">An
                        Innovative Agency For International Tax And Consultancy.</h1>
                    <p className="font-thin text-lg mt-12  text-left items-center text-neutral-500 max-w-5xl">
                        Are you ready to be part of the next big thing in technology? Dive into the Web3 community and
                        unlock
                        the future of the internet! Connect with innovators, developers, and enthusiasts who are
                        transforming
                        digital experiences with blockchain.
                    </p>
                    <div className="flex">
                        <a href="#"
                           className="mt-12 mb-8 px-10 py-2 text-2xl rounded-xl bg-gradient-to-r from-green-500 to-green-900 text-white border border-green-400 hover:scale-105 transition-all">
                            <h1>Know More</h1>

                        </a>
                    </div>
                </div>
                <div className="mt-10">
                    <img src={HeroImg} alt="Code Image"
                         className=" w-3/4 rounded-2xl rotate-3  hover:rotate-1 transition-filter duration-700 ease-in-out hover:grayscale-0"/>

                </div>
            </div>
        </div>
    )
}