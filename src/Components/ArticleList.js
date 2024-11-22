import React from 'react';
import { Link } from 'react-router-dom';

const ArticleList = ({ articles }) => (
    <ul>
        {articles.map((article) => (
            <li key={article._id}>
                <Link to={`/article/${article._id}`}>
                    {article.headline.main}
                </Link>
            </li>
        ))}
    </ul>
);

export default ArticleList;
