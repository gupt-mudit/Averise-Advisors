import React from 'react';
import AboutImg from '../assets/card-demo.jpg'
export const ArticleCard = ({title,content,img}) =>{
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col bg-gray-50">

            {/* Ensure the image fits in a rectangle */}
            <div className="w-full h-48">
                <img className="w-full h-full object-cover" src={AboutImg} alt="Sunset in the mountains"/>
            </div>
            <div className="px-6 py-4">
                <div className="font-thin text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base font-thin">
                    {content}.....
                </p>
            </div>
            <div className="flex px-6 py-4">
                <a href="#"
                   className="px-2 py-1 inline-block bg-gray-200 rounded-2xl hover:scale-105 transition-all">
                    <h1>Read More</h1>

                </a>
            </div>
        </div>
    );
}