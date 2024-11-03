import {Navbar} from "./Navbar.jsx";
import {ArticleCard} from "./ArticleCard.jsx";
import React from "react";

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
]
export const ArticlesPage = () => {
   return (<div className="main">
        <Navbar/>
       <div className="flex flex-col  justify-center px-10 -mt-16">
           <h1 className="text-4xl lg:text-4xl tracking-wide ml-24">ARTICLES</h1>
           <div className="flex flex-wrap gap-8  ml-2 p-20">
               {articleList.map((option, index) => (

                   <ArticleCard
                       key={index}
                       title={option.title}
                       content={option.content.length >= 200 ? option.content.slice(0, 200) : option.content}
                       img={option.img}
                   />
               ))}
           </div>
       </div>

    </div>)

}