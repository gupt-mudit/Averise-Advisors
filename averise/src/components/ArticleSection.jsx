import React, { useEffect, useState } from 'react';
import { ArticleCard } from "./ArticleCard.jsx";
import {get, getDatabase, ref} from "firebase/database";
import app from "../firebaseConfig.js";



export const ArticleSection = () => {
    const [contentLength, setContentLength] = useState(200); // Default content length
    let [articleList, setArticleList] = useState([]);

    const fetchData = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "articles");
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
            // Map articles to include their Firebase key as `id`
            const articlesWithIds = Object.entries(snapshot.val()).map(([key, value]) => ({
                id: key,
                ...value
            }));
            setArticleList(articlesWithIds);
        } else {
            alert("Error fetching articles");
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
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
            <div className="flex flex-wrap gap-8 items-center justify-center  ml-2 mt-10 lg:p-20">
                {articleList.slice(-6).map((option, index) => (
                    <ArticleCard
                        key={index}
                        id={option.id}
                        title={option.title}
                        content={option.content.length > contentLength ? `${option.content.slice(0, contentLength)}...` : option.content}
                        img={option.img}
                    />
                ))}
            </div>
            <div className="flex mt-4 lg:mt-0">
                <a href="/articles"
                   className="mb-8 px-10 py-1 text-2xl rounded-md bg-gradient-to-r from-green-600 to-green-700 text-white border border-green-400 hover:scale-105 transition-all">
                    <h1>Check More</h1>
                </a>
            </div>
        </div>
    );
}
