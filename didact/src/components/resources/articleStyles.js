import styled from "styled-components";

export const ArticleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 31%);
  justify-content: space-between;
  align-items: stretch;
  grid-auto-row: 200px;
  grid-gap: 30px;
  margin-bottom: 30px;

  .single-block-fill-article {
    background-color: #ffffff;
    border-radius: 7px;
    padding: 20px 20px 10px 20px;
    color: #242424;
    height: 100%;
    align-self: baseline;
    .circle {
      border-radius: 30px;
      height: 59px;
      width: 59px;
      background-color: rgba(242, 212, 174, 1);
      position: relative;
      top: 20px;
      right: -120px;
    }
    img {
      position: relative;
      z-index: 2;
      top: -35px;
    }
  }
  .double-block-fill-article {
    grid-column: 2 / span 2;
    background-color: #ffffff;
    border-radius: 7px;
    padding: 20px 20px 10px 20px;
    color: #242424;
    height: 100%;
    .circle {
      border-radius: 30px;
      height: 59px;
      width: 59px;
      background-color: rgba(242, 212, 174, 1);
      position: relative;
      top: 50px;
      left: 395px;
    }
    img {
      top: -15px;
      position: relative;
      z-index: 2;
      left: 125px;
    }
  }
`;

export const MainArticleGrid = styled.div`
  display: grid;
  grid-template-columns: 43% 53%;
  grid-template-rows: 210px;
  justify-content: space-between;
  grid-row-gap: 30px;
  margin-bottom: 30px;
`;

export const SecondaryArticleGrid = styled.div`
  display: grid;
  grid-template-columns: 43% 30% 20%;
  grid-template-rows: 271px;
  justify-content: start;
  grid-column-gap: 30px;
  margin-bottom: 30px;
`;

export const StylishBlockMainDub = styled.div`
  background-color: #ffffff;
  border-radius: 7px;
  padding: 20px 20px 10px 20px;
  grid-column: 2 / span 2;
  .circle {
    border-radius: 30px;
    height: 59px;
    width: 59px;
    background-color: rgba(242, 212, 174, 1);
    position: relative;
    top: 20px;
    right: -315px;
  }
  img {
    position: relative;
    z-index: 2;
    right: -100px;
    top: -30px;
  }
`;

export const StylishBlock = styled.div`
  background-color: #ffffff;
  border-radius: 7px;
  padding: 20px 20px 10px 20px;
  .circle {
    border-radius: 30px;
    height: 59px;
    width: 59px;
    background-color: rgba(242, 212, 174, 1);
    position: relative;
    top: 50px;
    right: -33px;
  }
  img {
    position: relative;
    z-index: 2;

    right: 5px;
  }
`;

export const StylishBlockDub = styled.div`
  background-color: #ffffff;
  border-radius: 7px;
  padding: 20px 20px 10px 20px;
  grid-column: 2 / span 2;
  .circle {
    border-radius: 30px;
    height: 59px;
    width: 59px;
    background-color: rgba(242, 212, 174, 1);
    position: relative;
    top: 65px;
    right: -315px;
  }
  img {
    position: relative;
    z-index: 2;
    right: -100px;
  }
`;

export const ArticleWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 7px;
  padding: 20px 20px 10px 20px;
  display: grid;
  grid-template-rows: 20% 15% 50% 15%;
  h1,
  h2,
  p {
    text-align: left;
  }
  h1 {
    line-height: 20px;
    font-size: 16px;
  }
  .article-header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    a {
      font-size: 16px;
      color: green;
    }
    a:visited {
      color: green;
    }
  }
  h1 {
    line-height: 16px;
    font-size: 16px;
  }
  h2 {
    font-size: 14px;
  }
  .link-anchor {
    color: #242424;
    font-weight: 600;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    &:visited {
      color: #242424;
    }
  }
`;

export const ExternalArticleWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 7px;
  padding: 20px 20px 10px 20px;
  display: grid;
  grid-template-rows: 20% 15% 50% 15%;
  h1,
  h2,
  p {
    text-align: left;
  }
  h1 {
    margin: 0;
    font-size: 18px;
    line-height: 18px;
  }
  .article-header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    a {
      font-size: 16px;
      color: green;
    }
    a:visited {
      color: green;
    }
  }
  h1 {
    line-height: 20px;
    font-size: 16px;
  }
  h2 {
    font-size: 14px;
  }

  .link-anchor {
    color: #242424;
    font-weight: 600;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    &:visited {
      color: #242424;
    }
  }
`;

export const FeaturedArticle = styled.div`
  margin-bottom: 30px;
  .admin-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      font-size: 16px;
      color: green;
    }
    a:visited {
      color: green;
    }
  }
  }
  h1,
  h2,
  h3,
  p {
    text-align: left;
  }
  h1 {
    font: Bold 40px/34px Open Sans;
  }
  h2 {
    font: Bold 20px/22px Open Sans;
    text-transform: uppercase;
  }

  h3 {
    font: Bold 14px/16px Open Sans;
  }

  a {
    display: block;
    text-align: right;
  }
  .link-anchor {
    color: #242424;
    font-weight: 600;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    &:visited {
      color: #242424;
    }
  }
`;

export const FullArticleStyled = styled.div`
  text-align: left;
  p {
    width: 520px;
    line-height: 1.5;
  }

  h2 {
    font-size: 16px;
  }
  .img-div {
    height: 350px;
    img {
      max-height: 100%;
      max-width: 100%;
      object-fit: stretch;
    }
  }
`;
