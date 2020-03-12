import styled from "styled-components";

export const SourceWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 7px;
  padding: 20px 20px 10px 20px;
  color: #242424;
  .no-edit {
    display: flex;
    justify-content: start;
  }
  .source {
    display: grid;
    grid-template-rows: 22px 145px 15px;
    grid-template-columns: 100%;
    justify-content: start;
  }

  .source-plus {
    display: grid;
    grid-template-rows: 22px 145px 15px;
    grid-template-columns: 100%;
    justify-content: start;
  }

  .source-admin {
    display: grid;
    grid-template-rows: 22px 145px 15px;
    grid-template-columns: 100%;
    justify-content: start;
    .edit-div {
      flex-flow: row nowrap;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        width: 25%;
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
    grid-template-rows: 22px 145px 15px auto;
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
  }
  .drop {
    display: flex;
    flex-flow: column wrap;
    p {
      text-align: left;
    }
  }
  .img-div {
    width: 100%;
    height: 145px;
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  h1 {
    margin: 0;
    padding: 0;
    line-height: 22px;
    font-size: 22px;
  }
  a {
    width: 100%;
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
