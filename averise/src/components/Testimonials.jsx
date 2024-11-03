import React from 'react';
import user1 from "../assets/user1.jpg";

export const Testimonials = () => {
    const testimonials = [
        {
            user: "Aarav Sharma",
            company: "Tech Innovations India",
            image: user1,
            text: "The team's expertise in navigating complex regulatory landscapes has been invaluable. Their proactive approach not only simplified our compliance processes but also enhanced our operational efficiency.",
        },
        {
            user: "Priya Gupta",
            company: "Smart Solutions Pvt. Ltd.",
            image: user1,
            text: "Working with Averise Advisors has been a game-changer for us. Their tailored strategies have helped us achieve significant tax savings while ensuring full compliance with regulations.",
        },
        {
            user: "Rohit Verma",
            company: "Future Vision Enterprises",
            image: user1,
            text: "Averise Advisors provided us with insightful guidance that helped us expand into international markets. Their deep understanding of global tax frameworks is truly commendable.",
        },
        {
            user: "Ananya Singh",
            company: "EcoTech Systems",
            image: user1,
            text: "Their dedication to integrating ESG principles into our business strategy has transformed how we operate. We now feel confident about our sustainability efforts and corporate responsibility.",
        },
        {
            user: "Vikram Patel",
            company: "Innovatech Solutions",
            image: user1,
            text: "The team's professionalism and commitment to excellence are unmatched. They helped us streamline our transfer pricing strategies, and we have seen remarkable results since.",
        },
        {
            user: "Nisha Mehta",
            company: "Global Trade Partners",
            image: user1,
            text: "Averise Advisors truly understands the challenges of doing business in a global market. Their support has been crucial in navigating complex tax regulations and compliance requirements.",
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center pt-28 px-14">
            <h1 className="text-4xl lg:text-6xl tracking-wide text-center">WHAT PEOPLE ARE SAYING</h1>
            <div className="md:p-20 flex flex-wrap justify-center">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                        <div className="rounded-md p-6 text-md border font-thin glass-effect">
                            {/* Display the testimonial text */}
                            <p className="mb-4">{testimonial.text}</p>
                            {/* Display the user's name in italic */}
                            <h6 className="font-semibold italic">{testimonial.user}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
