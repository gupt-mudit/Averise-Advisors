import React, {useState} from 'react'
import Logo from '../assets/Logo.svg'
import '../index.css'

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] =useState(false)
    return (
        <header className='flex items-center justify-between -mt-12 px-12 md:px-32 drop-shadow-md'>
            <ul className="hidden xl:flex items-center text-base gap-5 tracking-widest font-thin underline underline-offset-8">
                <li className="p-3 rounded-md cursor-pointer transition-all">
                    <span
                        className="hover:bg-gradient-to-r from-green-500 to-green-900 hover:text-transparent hover:bg-clip-text">home</span>
                </li>
                <li className="p-3 rounded-md cursor-pointer transition-all">
                    <span
                        className="hover:bg-gradient-to-r from-green-500 to-green-900 hover:text-transparent hover:bg-clip-text ">about</span>
                </li>
                <li className="p-3 rounded-md cursor-pointer transition-all">
                    <span
                        className="hover:bg-gradient-to-r from-green-500 to-green-900 hover:text-transparent hover:bg-clip-text ">services</span>
                </li>
            </ul>
            <a href="#" className="pb-7 flex flex-col items-center hover:scale-105 transition-all">
                <img src={Logo} className=" " alt="Vite"/>
            </a>


            <ul className="hidden xl:flex items-center text-base gap-5 tracking-widest font-thin">

                <li className="p-3 rounded-md cursor-pointer transition-all">
                    <span
                        className="hover:bg-gradient-to-r from-green-500 to-green-900 hover:text-transparent hover:bg-clip-text underline underline-offset-8 ">articles</span>
                </li>
                <li className="p-3 rounded-md cursor-pointer transition-all">
                    <span
                        className="hover:bg-gradient-to-r from-green-500 to-green-900 hover:text-transparent hover:bg-clip-text underline underline-offset-8">testimonials</span>
                </li>
                <li className="p-3 rounded-md cursor-pointer transition-all">
                    <span
                        className="hover:bg-gradient-to-r from-green-500 to-green-900 hover:text-transparent hover:bg-clip-text underline underline-offset-8">contact</span>
                </li>


            </ul>


            {isMenuOpen ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor" className="size-6" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                ) :
                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                      stroke="currentColor" className="size-6 xl:hidden container z-]"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>)

            }
            {
                isMenuOpen && (<div
                        className="fixed right-0 z-20 top-24 bg-white border-8 rounded-md w-full p-12 my-24 flex flex-col justify-center items-center xl:hidden">
                        <ul>
                            <li className="py-2">home</li>
                            <li className="py-2">about</li>
                            <li className="py-2">articles</li>
                            <li className="py-2">testimonials</li>
                            <li className="py-2">contact</li>

                        </ul>
                    </div>
                )
            }


        </header>
    )
}