import React from 'react';

export const Hero = () => {
    return (<div className="flex flex-col text-white mx-20 mt-16 p-16 " >
            <h1 className=" text-6xl lg:text-8xl text-left tracking-wide">WE ARE AVERISE</h1>
            <h1 className=" py-2 text-4xl lg:text-6xl text-left tracking-widest bg-gradient-to-r from-green-500 to-green-900 text-transparent bg-clip-text">An
                Innovative Agency For International Tax And Consultancy.</h1>
            <p className="font-thin text-lg mt-12  text-left items-center text-neutral-500 max-w-5xl">
                Are you ready to be part of the next big thing in technology? Dive into the Web3 community and unlock
                the future of the internet! Connect with innovators, developers, and enthusiasts who are transforming
                digital experiences with blockchain, decentralized applications, and cutting-edge tech. Whether you're a
                seasoned pro or just curious, there's a place for you here. Network, learn, and grow with a vibrant
                community that's shaping the future of the web.
            </p>
            <div className="flex">
            <a href="#"
               className="mt-28 mb-8 px-10 py-1 text-2xl rounded-md bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text border border-green-400 hover:scale-105 transition-all">
                <h1>Know More</h1>

            </a>
            </div>

        </div>
    )
}