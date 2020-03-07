import styled from "styled-components";

export const ResourceWrapper = styled.div`
  .title {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .title-admin {
    display: flex;
    flex-flow: row no-wrap;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ResourceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 31%);
  justify-content: space-between;
  align-items: start;
  grid-auto-row: 200px;
  grid-gap: 30px;
  margin-bottom: 30px;
`;

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: -10px 10px 10px 10px;
  border-top: 1px solid black;
  width: 100%;

  p {
    font-weight: bold;
    margin-left: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const ToolWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 7px;
  padding: 20px 20px 10px 20px;
  .no-edit {
    display: flex;
    justify-content: start;
  }
  .tool {
    display: grid;
    grid-template-rows: 24px 195px 15px;
    grid-template-columns: 100%;
    justify-content: start;
  }
  .tool-plus {
    display: grid;
    grid-template-rows: 24px 195px 15px;
    grid-template-columns: 100%;
    justify-content: start;
  }

  .tool-admin {
    display: grid;
    grid-template-rows: 24px 195px 15px;
    grid-template-columns: 100%;
    justify-content: start;
    .edit-div {
      flex-flow: row nowrap;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        font-size: 16px;
        color: green;
      }
      a:visited {
        color: green;
      }
    }
  }
  .tool-admin-plus {
    display: grid;
    grid-template-rows: 24px 195px 15px auto;
    grid-template-columns: 100%;
    justify-content: start;
    align-items: start;

    .edit-div {
      flex-flow: row nowrap;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        font-size: 16px;
        color: green;
      }
      a:visited {
        color: green;
      }
    }
    .drop {
      display: flex;
      flex-flow: column wrap;
      justify-content: start;
      align-items: start;
      text-align: left;
    }
  }
  .img-div {
    margin: 20px 0;
    padding: 25px 0;
  }
  h1 {
    margin: 0;
    padding: 0;
    line-height: 24px;
  }
`;

export const SourceWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 7px;
  padding: 20px 20px 10px 20px;
  .no-edit {
    display: flex;
    justify-content: start;
  }
  .source {
    display: grid;
    grid-template-rows: 24px 145px 15px;
    grid-template-columns: 100%;
    justify-content: start;
  }

  .source-plus {
    display: grid;
    grid-template-rows: 24px 145px 15px;
    grid-template-columns: 100%;
    justify-content: start;
  }

  .source-admin {
    display: grid;
    grid-template-rows: 24px 145px 15px;
    grid-template-columns: 100%;
    justify-content: start;
    .edit-div {
      flex-flow: row nowrap;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        font-size: 16px;
        color: green;
      }
      a:visited {
        color: green;
      }
    }
  }
  .source-admin-plus {
    display: grid;
    grid-template-rows: 24px 145px 15px auto;
    grid-template-columns: 100%;
    justify-content: start;
    align-items: start;

    .edit-div {
      flex-flow: row nowrap;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        font-size: 16px;
        color: green;
      }
      a:visited {
        color: green;
      }
    }
    .drop {
      display: flex;
      flex-flow: column wrap;
      justify-content: start;
      align-items: start;
      text-align: left;
    }
  }
  .img-div {
    margin: 20px 0;
    padding: 20px 0;
  }
  h1 {
    margin: 0;
    padding: 0;
    line-height: 24px;
  }
`;
export const MainArticleGrid = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: 43% 53%;
  grid-template-rows: 210px 271px;
  justify-content: space-between;
  grid-row-gap: 30px;
  margin-bottom: 30px;
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
  .article-header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    h1 {
      width: 90%;
      margin: 0;
      font-size: 18px;
      line-height: 18px;
    }
    a {
      font-size: 16px;
      color: green;
    }
    a:visited {
      color: green;
    }
  }
  h2 {
    font-size: 14px;
  }
  .link-div {
    text-align: right;
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
  .article-header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    h1 {
      margin: 0;
      font-size: 18px;
      line-height: 18px;
    }
    a {
      font-size: 16px;
      color: green;
    }
    a:visited {
      color: green;
    }
  }
  h2 {
    font-size: 14px;
  }

  .link-div {
    display: flex;
    justify-content: center;
  }
`;

export const FeaturedArticle = styled.div`
  margin-bottom: 30px;

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
`;

export const FullArticleStyled = styled.div`
  text-align: left;

  h2 {
    font-size: 16px;
  }
  .img-div {
    height: 350px;
    object-fit: contain;
  }
`;
