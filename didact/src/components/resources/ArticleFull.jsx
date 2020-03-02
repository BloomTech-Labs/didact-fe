import React from 'react';

const ArticleFull = props => {
    const article = props.article

    return (
        <div className="article-full">
           <h1>{article.title}</h1>
           <h2>{article.date}</h2>
           <h2>{article.author}</h2>
           <p>{article.body}</p>
        </div>

    )
}

export default ArticleFull;