import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from "./components/Home.jsx";
import { ArticlesPage } from "./components/ArticlesPage.jsx";
import { About } from "./components/About.jsx";
import PostArticle from "./components/PostArticle.jsx";
import ArticleDetails from "./components/ArticleDetails.jsx";
import { Navbar } from "./components/Navbar.jsx";

function App() {
    return (
        <Router>


                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Navigate to="/" replace />} />
                    <Route path="/articles" element={<ArticlesPage />} />
                    <Route path="/postArticle" element={<PostArticle />} />
                    <Route path="/articles/:id" element={<ArticleDetails />} />
                </Routes>


        </Router>
    );
}

export default App;
