import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getArticleById } from "../../store/actions";
import { FullArticleStyled, HeaderStyled } from "./resourceStyles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import articlefillerimg from "../../images/articlefillerimg.png";
import { Link } from "react-router-dom";
const ArticleFull = ({ props, id }) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const article = state.articlesReducer.article;
  const author = article.first_name + " " + article.last_name;

  useEffect(() => {
    dispatch(getArticleById(id));
  }, [dispatch, id]);

  return (
    <FullArticleStyled className="article-full">
      <HeaderStyled>
        <p className="header-navs">
          <span>Resources</span>

          <ChevronRightIcon style={{ fontSize: "1.6rem" }} />
          <Link to="/articles">
            <span>Articles</span>
          </Link>
        </p>
      </HeaderStyled>
      <h1>{article.title}</h1>
      <h2>{article.date}</h2>
      <h2>{author}</h2>
      <div className="img-div">
        <img src={articlefillerimg} />
      </div>
      <p>{article.body}</p>
    </FullArticleStyled>
  );
};

export default ArticleFull;
