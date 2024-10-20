import React from 'react';
import AboutImg from "../assets/About.jpg";
import {ServicesCard} from "./ServicesCard.jsx";

export const Services = () => {

    return (
        <div className="flex flex-col items-center justify-center  pt-28 px-14">
            <h1 className=" text-4xl lg:text-6xl tracking-wide">SERVICES AND SOLUTIONS</h1>
            <ServicesCard/>
        </div>

    )
}