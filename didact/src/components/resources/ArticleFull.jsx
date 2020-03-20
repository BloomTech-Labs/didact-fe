import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getArticleById } from "../../store/actions";
import { FullArticleStyled } from "./articleStyles";
import { HeaderStyled } from "./resourceStyles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import articlefillerimg from "../../images/articlefillerimg.png";
import { Link } from "react-router-dom";
const ArticleFull = ({ props, id }) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const article = state.articlesReducer.article;
  const loading = state.articlesReducer.isLoadingArticles;

  useEffect(() => {
    dispatch(getArticleById(id));
  }, [dispatch, id]);

  return (
    <FullArticleStyled className="article-full">
      {loading && <h1>I'm Loading</h1>}
      {article && loading === false && (
        <>
          <HeaderStyled>
            <p className="header-navs">
              <Link to="/resources">Resources</Link>
              <ChevronRightIcon style={{ fontSize: "1.6rem" }} />
              <Link to="/articles">
                <span>Articles</span>
              </Link>
              <ChevronRightIcon style={{ fontSize: "1.6rem" }} />
              {article.title && <span>{article.title.substring(0, 25)}..</span>}
            </p>
          </HeaderStyled>

          <h1>{article.title}</h1>
          <h2>{article.first_name + " " + article.last_name}</h2>
          <h3>{article.date}</h3>
          <div className="img-div">
            <img src={articlefillerimg} alt="" />
          </div>
          {article.body &&
            article.body.split("\n").map(portion => <p>{portion}</p>)}
        </>
      )}
    </FullArticleStyled>
  );
};

export default ArticleFull;
