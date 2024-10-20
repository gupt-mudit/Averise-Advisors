import React, { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {Home} from "./components/Home.jsx";
import {ArticlesPage} from "./components/ArticlesPage.jsx";
import {About} from "./components/About.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Navigate to="/" replace />} />
                <Route path="/articles" element={<ArticlesPage />} />
            </Routes>

        </Router>
    )
}

export default App
