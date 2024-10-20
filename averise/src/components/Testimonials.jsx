import React from 'react'
import user1 from "../assets/user1.jpg";
export const Testimonials = () => {
    const testimonials = [
        {
            user: "John Doe",
            company: "Stellar Solutions",
            image: user1,
            text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
        },
        {
            user: "Jane Smith",
            company: "Blue Horizon Technologies",
            image: user1,
            text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
        },
        {
            user: "David Johnson",
            company: "Quantum Innovations",
            image: user1,
            text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
        },
        {
            user: "Ronee Brown",
            company: "Fusion Dynamics",
            image: user1,
            text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
        },
        {
            user: "Michael Wilson",
            company: "Visionary Creations",
            image: user1,
            text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
        },
        {
            user: "Emily Davis",
            company: "Synergy Systems",
            image: user1,
            text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center  pt-28 px-14">
            <h1 className=" text-4xl lg:text-6xl tracking-wide text-center">WHAT PEOPLE ARE SAYING</h1>
            <div className="md:p-20 flex flex-wrap justify-center">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                        <div className="rounded-md p-6 text-md border font-thin glass-effect">
                            <p>{testimonial.text}</p>
                            <div className="flex mt-8 items-start">
                                <img
                                    className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                                    src={testimonial.image}
                                    alt=""
                                />
                                <div>
                                    <h6>{testimonial.user}</h6>
                                    <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}