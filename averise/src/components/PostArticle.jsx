import React, { useState, useEffect } from 'react';
import app from "../firebaseConfig";
import { getDatabase, ref, set, push, get, remove } from "firebase/database";
import { useNavigate } from 'react-router-dom';
import { ArticleCard } from "./ArticleCard.jsx";
import { Navbar } from "./Navbar.jsx";

function PostArticle() {
    const navigate = useNavigate();
    const [inputValue1, setInputValue1] = useState("");
    const [inputValue2, setInputValue2] = useState("");
    const [inputValue3, setInputValue3] = useState("");
    const [articles, setArticles] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Check login credentials
    const handleLogin = () => {
        const validUsername = import.meta.env.VITE_USERNAME; // Replace with actual username
        const validPassword = import.meta.env.VITE_PASSWORD; // Replace with actual password

        if (username === validUsername && password === validPassword) {
            setIsAuthenticated(true);
            setError("");
        } else {
            setError("Invalid username or password");
        }
    };

    // Save article data
    const saveData = async () => {
        const db = getDatabase(app);
        const newDocRef = push(ref(db, "articles"));
        set(newDocRef, {
            title: inputValue1,
            content: inputValue2,
            img: inputValue3
        }).then(() => {
            alert("Article saved successfully!");
            fetchData(); // Fetch updated list
            setInputValue1("");
            setInputValue2("");
            setInputValue3("");
        }).catch((error) => {
            alert("Error: " + error.message);
        });
    };

    // Fetch articles
    const fetchData = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "articles");
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
            // Map articles to include the Firebase key as `id`
            const articlesWithIds = Object.entries(snapshot.val()).map(([key, value]) => ({
                id: key,
                ...value
            }));
            setArticles(articlesWithIds);
        } else {
            setArticles([]);
        }
    };

    // Delete article
    const deleteArticle = async (id) => {
        const db = getDatabase(app);
        remove(ref(db, `articles/${id}`)).then(() => {
            alert("Article deleted successfully!");
            fetchData(); // Refresh the list
        }).catch((error) => {
            alert("Error: " + error.message);
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (!isAuthenticated) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                    <h2 className="text-2xl font-bold mb-4">Login</h2>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border border-gray-300 p-2 rounded-lg w-full mb-4"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-gray-300 p-2 rounded-lg w-full mb-4"
                    />
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <button
                        onClick={handleLogin}
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600"
                    >
                        Login
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-bold mb-8 text-center">Write an Article</h1>

                <div className="flex flex-col gap-4 max-w-lg mx-auto">
                    <input
                        type="text"
                        value={inputValue1}
                        placeholder="Title"
                        onChange={(e) => setInputValue1(e.target.value)}
                        className="border border-gray-300 p-2 rounded-lg"
                    />
                    <textarea
                        value={inputValue2}
                        placeholder="Content"
                        onChange={(e) => setInputValue2(e.target.value)}
                        className="border border-gray-300 p-2 rounded-lg h-40"
                    />
                    <input
                        type="text"
                        value={inputValue3}
                        placeholder="Image URL"
                        onChange={(e) => setInputValue3(e.target.value)}
                        className="border border-gray-300 p-2 rounded-lg"
                    />
                    <button
                        onClick={saveData}
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                    >
                        Save Article
                    </button>
                </div>

                <h2 className="text-2xl font-semibold mt-12 mb-4">Saved Articles</h2>
                <div className="flex flex-col gap-4">
                    {articles.map((article) => (
                        <div key={article.id} className="p-4 border border-gray-200 rounded-lg shadow-lg">
                            <ArticleCard
                                title={article.title}
                                id={article.id}
                                content={article.content.length > 200 ? `${article.content.slice(0, 200)}...` : article.content}
                                img={article.img}
                            />
                            <button
                                onClick={() => deleteArticle(article.id)}
                                className="mt-4 bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600"
                            >
                                Delete Article
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PostArticle;
