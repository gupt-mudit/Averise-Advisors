import React, { useState } from 'react';
import {ServicesCard} from "./ServicesCard.jsx";
import ContactImg from "../assets/contact2.jpg";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Prepare the mailto link
        const { name, email, subject, message } = formData;
        const mailtoLink = `mailto:youremail@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${name} (${email})`;

        // Open the mailto link
        window.location.href = mailtoLink;

        // Reset the form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 sm:mx-5 md:mx-20 mt-16 p-7 lg:p-16  gap-5">
            <div className="sm:mb-7 md:m-auto hidden lg:block lg:m-auto ">
                <img src={ContactImg} alt="Code Image"
                     className="w-3/5 rounded-2xl transition-filter duration-700 ease-in-out hover:grayscale-0"/>

            </div>
            <div className="items-center justify-center xl:p-16">
                <div className="flex flex-col items-center justify-center  ">
                    <h1 className=" text-4xl lg:text-6xl tracking-wide">CONTACT US</h1>
                    <p className="font-thin text-lg mt-6 sm:text-center lg:text-left lg:items-center  max-w-5xl">
                        Fill out the form below. Our team is ready to assist you with the best solutions to meet your specific needs.
                    </p>
                </div>
                <div className="mt-3">
                    <form onSubmit={handleSubmit}
                          className="max-w-xl mx-auto p-6 rounded-lg shadow-md glass-effect-contact ">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-thin mb-2">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-thin mb-2">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="subject" className="block text-gray-700 font-thin mb-2">Subject:</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 font-thin mb-2">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 h-32"
                            ></textarea>
                        </div>
                        <button type="submit"
                                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-600 transition duration-200">
                            Send
                        </button>
                    </form>
                </div>

            </div>
        </div>
            );
            };

            export default ContactUs;
