import React, { useEffect, useState } from 'react';
import { ArticleCard } from "./ArticleCard.jsx";

const articleList = [
    {
        title: "The Importance of Transfer Pricing in Global Operations",
        content: "As companies expand globally, transfer pricing becomes a crucial factor in ensuring tax compliance and minimizing risks. Transfer pricing refers to the pricing of goods, services, or intangibles transferred between related entities within a multinational enterprise.",
        img: "../assets/card-demo.jpg"
    },
    {
        title: "Sustainable Tax Strategies for Multinational Enterprises",
        content: "Multinational enterprises are increasingly adopting sustainable tax strategies to address regulatory pressures and public expectations. In this article, we explore the impact of tax reforms on global operations.",
        img: "../assets/card-demo.jpg"
    },
    {
        title: "Sustainable Tax Strategies for Multinational Enterprises",
        content: "Multinational enterprises are increasingly adopting sustainable tax strategies to address regulatory pressures and public expectations. In this article, we explore the impact of tax reforms on global operations.",
        img: "../assets/card-demo.jpg"
    },
    {
        title: "Sustainable Tax Strategies for Multinational Enterprises",
        content: "Multinational enterprises are increasingly adopting sustainable tax strategies to address regulatory pressures and public expectations. In this article, we explore the impact of tax reforms on global operations.",
        img: "../assets/card-demo.jpg"
    },
    {
        title: "Sustainable Tax Strategies for Multinational Enterprises",
        content: "Multinational enterprises are increasingly adopting sustainable tax strategies to address regulatory pressures and public expectations. In this article, we explore the impact of tax reforms on global operations.",
        img: "../assets/card-demo.jpg"
    },
    {
        title: "Sustainable Tax Strategies for Multinational Enterprises",
        content: "Multinational enterprises are increasingly adopting sustainable tax strategies to address regulatory pressures and public expectations. In this article, we explore the impact of tax reforms on global operations.",
        img: "../assets/card-demo.jpg"
    },
    {
        title: "Sustainable Tax Strategies for Multinational Enterprises",
        content: "Multinational enterprises are increasingly adopting sustainable tax strategies to address regulatory pressures and public expectations. In this article, we explore the impact of tax reforms on global operations.",
        img: "../assets/card-demo.jpg"
    },
    {
        title: "Sustainable Tax Strategies for Multinational Enterprises",
        content: "Multinational enterprises are increasingly adopting sustainable tax strategies to address regulatory pressures and public expectations. In this article, we explore the impact of tax reforms on global operations.",
        img: "../assets/card-demo.jpg"
    }
];

export const ArticleSection = () => {
    const [contentLength, setContentLength] = useState(200); // Default content length

    useEffect(() => {
        const updateContentLength = () => {
            if (window.innerWidth < 640) {
                setContentLength(10); // Small screens
            } else if (window.innerWidth < 768) {
                setContentLength(50); // Medium screens
            } else {
                setContentLength(200); // Large screens
            }
        };

        // Set initial content length
        updateContentLength();

        // Listen for window resize
        window.addEventListener('resize', updateContentLength);

        // Cleanup listener on unmount
        return () => window.removeEventListener('resize', updateContentLength);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center pt-28 px-10 ">
            <h1 className="text-4xl lg:text-6xl tracking-wide">ARTICLES</h1>
            <div className="flex flex-wrap gap-8 items-center justify-center  ml-2 mt-10 p-20">
                {articleList.slice(0, 6).map((option, index) => (
                    <ArticleCard
                        key={index}
                        title={option.title}
                        content={option.content.length > contentLength ? `${option.content.slice(0, contentLength)}...` : option.content}
                        img={option.img}
                    />
                ))}
            </div>
            <div className="flex">
                <a href="#"
                   className="mb-8 px-10 py-1 text-2xl rounded-md bg-gradient-to-r from-green-600 to-green-700 text-white border border-green-400 hover:scale-105 transition-all">
                    <h1>Check More</h1>
                </a>
            </div>
        </div>
    );
}
