import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchForm from './Components/SearchForm';
import ArticleList from './Components/ArticleList';
import ArticleDetails from './Components/ArticleDetails';

const App = () => {
    const [articles, setArticles] = useState([]);

    const handleSearch = async (query) => {
        try {
            const response = await fetch(`/api/articles?q=${encodeURIComponent(query)}`); 
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
 
            const data = await response.json(); 
            setArticles(data.response.docs); 
        } catch (error) {
            console.error('Error fetching articles:', error);
        }
    };

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <SearchForm onSearch={handleSearch} />
                            <ArticleList articles={articles} />
                        </>
                    }
                />
                <Route path="/article/:id" element={<ArticleDetails />} />
            </Routes>
        </Router>
    );
};

export default App;
