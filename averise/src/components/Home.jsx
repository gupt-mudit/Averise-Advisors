import {Navbar} from "./Navbar.jsx";
import {Hero} from "./Hero.jsx";
import {About} from "./About.jsx";
import {Services} from "./Services.jsx";
import {ArticleSection} from "./ArticleSection.jsx";
import {Testimonials} from "./Testimonials.jsx";
import ContactUs from "./ContactUs.jsx";
import Footer from "./Footer.jsx";
import React from "react";

export const Home = () => {
    return (<div id="home" >
         <Navbar/>
        <div  className="main pt-10">
            <Hero/>
        </div>
        <div id="about">
            <About/>
        </div>
        <div className="main" id="services">
            <Services/>
        </div>
        <div id="articles">
            <ArticleSection/>
        </div>
        <div className="main" id="testimonials">
            <Testimonials/>
        </div>
        <div id="contact">
            <ContactUs/>
        </div>
        <div className="main">
            <Footer/>
        </div>

    </div>)
}