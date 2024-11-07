import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import app from "../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";
import {Navbar} from "./Navbar.jsx";

const ArticleDetail = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        const fetchArticle = async () => {
            const db = getDatabase(app);
            const dbRef = ref(db, `articles/${id}`);
            const snapshot = await get(dbRef);
            if (snapshot.exists()) {
                setArticle(snapshot.val());
            } else {
                alert("Article not found");
            }
        };

        fetchArticle();
    }, [id]);

    if (!article) {
        return <div>Loading...</div>;
    }

    return (
        <div className="main">
            <Navbar/>
        <div className="container mx-auto p-8 -mt-16">

            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <img src={article.img} alt={article.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                    <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
                    <p className="text-gray-800 text-lg">{article.content}</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ArticleDetail;
