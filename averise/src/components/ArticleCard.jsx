import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ArticleCard = ({ id, title, content, img }) => {
    const navigate = useNavigate();

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col bg-gray-50">
            <div className="w-full h-48">
                <img className="w-full h-full object-cover" src={img} alt="img" />
            </div>
            <div className="px-6 py-4">
                <div className="font-thin text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base font-thin">
                    {content}...
                </p>
            </div>
            <div className="flex px-6 py-4">
                <button
                    onClick={() => navigate(`/articles/${id}`)}
                    className="px-2 py-1 inline-block bg-gray-200 rounded-2xl hover:scale-105 transition-all"
                >
                    Read More
                </button>
            </div>
        </div>
    );
};
