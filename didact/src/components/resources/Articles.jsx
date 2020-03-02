import React from 'react';
import ArticleBrief from './ArticleBrief.jsx'
import { useSelector } from 'react-redux'

const Articles = props => {
    const state = useSelector(state => state);
    const articles = state.resourcesReducer.articles;

    return (
        <div className="articles-list">
        {articles.map(article => (
            <ArticleBrief article={article} key={article.id}/>
        ))}
        </div>
    )
}

export default Articles;