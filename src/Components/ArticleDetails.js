import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetails = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await fetch(`/https://backend-deploy-3egh.onrender.com/api/articles/${id}`); 
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }

                const data = await response.json(); 
                setArticle(data.response.docs[0]);
            } catch (error) {
                console.error('Error fetching article:', error);
            }
        };

        fetchArticle();
    }, [id]);

    if (!article) return <p>Loading...</p>;

    const { headline, source, pub_date, abstract, lead_paragraph, web_url } = article;

    return (
        <div>
            <h1>{headline.main}</h1>
            <p>Source: {source}</p>
            <p>Published: {new Date(pub_date).toLocaleDateString()}</p>
            <p>{abstract}</p>
            <p>{lead_paragraph}</p>
            <a href={web_url} target="_blank" rel="noopener noreferrer">
                Read full article
            </a>
        </div>
    );
};

export default ArticleDetails;
