import React from 'react';
import { Link } from 'react-router-dom';

const ArticleList = ({ articles }) => (
    <ul>
        {articles.map((article) => (
            <li key={article._id}>
                <Link to={`https://backend-deploy-3egh.onrender.com/article/${article._id}`}>
                    {article.headline.main}
                </Link>
            </li>
        ))}
    </ul>
);

export default ArticleList;
