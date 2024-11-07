import React, { useState } from 'react';
import Logo from '../assets/Logo3.svg';
import '../index.css';
import { HashLink } from 'react-router-hash-link';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="flex items-center justify-between px-12 md:px-32  drop-shadow-md bg-white sticky top-0 z-20">
            <ul className="hidden xl:flex items-center text-base gap-5 tracking-widest font-thin underline underline-offset-8 ">
                <li className="p-3 rounded-md cursor-pointer transition-all">
                    <HashLink to="/#home" className="hover:bg-gradient-to-r from-green-500 to-green-900 hover:text-transparent hover:bg-clip-text">home</HashLink>
                </li>
                <li className="p-3 rounded-md cursor-pointer transition-all">
                    <HashLink to="/#about" className="hover:bg-gradient-to-r from-green-500 to-green-900 hover:text-transparent hover:bg-clip-text">about</HashLink>
                </li>
                <li className="p-3 rounded-md cursor-pointer transition-all">
                    <HashLink to="/#services" className="hover:bg-gradient-to-r from-green-500 to-green-900 hover:text-transparent hover:bg-clip-text">services</HashLink>
                </li>
            </ul>
            <a href="/" className=" flex flex-col items-center hover:scale-105 transition-all sm:-mt-32 xl:-mt-36">
                <img src={Logo} className="" alt="Vite" />
            </a>
            <ul className="hidden xl:flex items-center text-base gap-5 tracking-widest font-thin underline underline-offset-8 ">
                <li className="p-3 rounded-md cursor-pointer transition-all">
                    <HashLink to="/articles" className="hover:bg-gradient-to-r from-green-500 to-green-900 hover:text-transparent hover:bg-clip-text">articles</HashLink>
                </li>
                <li className="p-3 rounded-md cursor-pointer transition-all">
                    <HashLink to="/#testimonials" className="hover:bg-gradient-to-r from-green-500 to-green-900 hover:text-transparent hover:bg-clip-text">testimonials</HashLink>
                </li>
                <li className="p-3 rounded-md cursor-pointer transition-all">
                    <HashLink to="/#contact" className="hover:bg-gradient-to-r from-green-500 to-green-900 hover:text-transparent hover:bg-clip-text">contact</HashLink>
                </li>
            </ul>

            {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7 xl:hidden container " onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>
            )}

            {isMenuOpen && (
                <div className="fixed right-0 z-20 top-14 border-8 rounded-md w-full p-12 my-24 flex flex-col justify-center items-center xl:hidden glass-effect-nav ">
                    <ul>
                        <li className="py-2"><HashLink to="/#home" onClick={() => setIsMenuOpen(false)}>home</HashLink>
                        </li>
                        <li className="py-2"><HashLink to="/#about"
                                                       onClick={() => setIsMenuOpen(false)}>about</HashLink></li>
                        <li className="py-2"><HashLink to="/#services"
                                                       onClick={() => setIsMenuOpen(false)}>services</HashLink></li>

                        <li className="py-2"><HashLink to="/#articles"
                                                       onClick={() => setIsMenuOpen(false)}>articles</HashLink></li>
                        <li className="py-2"><HashLink to="/#testimonials"
                                                       onClick={() => setIsMenuOpen(false)}>testimonials</HashLink></li>
                        <li className="py-2"><HashLink to="/#contact"
                                                       onClick={() => setIsMenuOpen(false)}>contact</HashLink></li>
                    </ul>
                </div>
            )}
        </header>
    );
}
