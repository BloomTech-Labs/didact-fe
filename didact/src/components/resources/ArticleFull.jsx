import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getArticleById } from '../../store/actions';

const ArticleFull = ({props, id}) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const article = state.articlesReducer.article

    useEffect(() => {
        dispatch(getArticleById(id))
    }, [dispatch, id])

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