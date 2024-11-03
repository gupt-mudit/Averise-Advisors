import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Logo  from '../assets/Logo.svg'
import React from "react";
const Footer = () => {
    return (
        <footer className="p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Footer Left */}
                <div>
                    <a href="#">
                        <img src={Logo} className=" w-1/2" alt="averise"/>
                    </a>
                    <p className="mt-2 text-gray-400">Averise Advisors © 2024</p>
                </div>

                {/* Footer Center */}
                <div>
                    <div className="mb-4 flex">
                        <FontAwesomeIcon icon={faMapMarker} className="text-2xl bg-gray-100 rounded-full p-3" />
                        <p className="inline-block ml-4 mt-3">444 S. Cedros Ave, Solana Beach, California</p>
                    </div>
                    <div className="mb-4 flex" >
                        <FontAwesomeIcon icon={faPhone} className="text-2xl bg-gray-100 rounded-full p-3" />
                        <p className="inline-block ml-4 mt-3">+1.555.555.5555</p>
                    </div>
                    <div className="flex">
                        <FontAwesomeIcon icon={faEnvelope} className="text-2xl bg-gray-100 rounded-full p-3" />
                        <p className="inline-block ml-4  mt-3">
                            <a href="mailto:support@company.com" className="text-green-600 hover:underline">support@company.com</a>
                        </p>
                    </div>
                </div>

                {/* Footer Right */}
                <div>
                    <p className="mb-4 flex flex-col font-thin">
                        <span className="text-xl font-bold mb-3 ">About Averise Advisors</span>
                      Providing tailored solutions in international tax, transfer pricing, and ESG integration. With our deep expertise and pragmatic understanding of diverse market landscapes, we help businesses navigate the complexities of global taxation and compliance.                    </p>
                    <div className="space-x-3 mt-4">
                        <a href="#" className="bg-gray-100 p-2 rounded-full inline-block text-xl hover:bg-green-600">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="#" className="bg-gray-100 p-2 rounded-full inline-block text-xl  hover:bg-green-600">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="#" className="bg-gray-100 p-2 rounded-full inline-block text-xl hover:bg-green-600">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
