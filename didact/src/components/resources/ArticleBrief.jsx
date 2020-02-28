import React from 'react';

const ArticleBrief = (props) => {
    const article = props.article;
    const brief = article.body.slice(0, 55);

    return (
        <div className="article-brief">
            <h1>{article.title}</h1>
            <h2>{article.author}</h2>
            <p>{brief}...</p>
            <Link>Go To Article</Link>
        </div>
    )
}

export default ArticleBrief;