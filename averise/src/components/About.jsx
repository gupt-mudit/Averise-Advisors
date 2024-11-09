import React from 'react';
import AboutImg from '../assets/About.jpg';

export const About = () => {
    return (
        <div className="p-8 grid grid-cols-1 lg:grid-cols-2 sm:mx-5 md:mx-20 mt-16 xl:p-16 ">
            <div className="hidden lg:block lg:m-auto">
                <img
                    src={AboutImg}
                    alt="Code Image"
                    className="w-3/6 rounded-md transition-filter duration-700 ease-in-out hover:grayscale-0"
                />
            </div>
            <div className="flex flex-col text-center lg:text-left items-center lg:items-start">
                <h1 className="text-4xl lg:text-5xl tracking-wide">ABOUT US</h1>
                <h1 className="text-start mt-10 py-2 text-3xl lg:text-4xl tracking-widest bg-gradient-to-r from-green-500 to-green-900 text-transparent bg-clip-text">
                    Your Partner in Navigating Global Taxation and Compliance
                </h1>
                <p className=" text-start text-lg mt-12 max-w-5xl " style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                    At Averise Advisors, we are more than consultants, we are strategic partners for multinational corporations facing the challenges of global taxation, transfer pricing, and ESG integration. Our team of seasoned professionals combines technical expertise with practical insights into diverse market landscapes. From bespoke transfer pricing strategies to forward-thinking tax solutions and seamless ESG integration, we empower our clients to stay compliant and competitive. Averise Advisors is committed to providing actionable, customized solutions that support sustainable growth in a complex, ever-evolving regulatory environment.
                </p>
                <div className="flex justify-center lg:justify-start w-full">
                    <a
                        href="/#contact"
                        className="mt-28 mb-8 px-10 py-1 text-2xl rounded-md bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text border border-green-400 hover:scale-105 transition-all"
                    >
                        <h1>Contact us</h1>
                    </a>
                </div>
            </div>
        </div>
    );
};
