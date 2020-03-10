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

  .single-block-fill-tool {
    background-color: #ffffff;
    border-radius: 7px;
    padding: 20px 20px 10px 20px;
    color: #242424;
    height: 262px;
    align-self: baseline;
    .circle {
      border-radius: 30px;
      height: 59px;
      width: 59px;
      background-color: rgba(242, 212, 174, 1);
      position: relative;
      top: 50px;
      right: -100px;
    }
    img {
      position: relative;
      z-index: 2;

      right: 5px;
    }
  }
  .double-block-fill-tool {
    grid-column: 2 / span 2;
    background-color: #ffffff;
    border-radius: 7px;
    padding: 20px 20px 10px 20px;
    color: #242424;
    height: 262px;
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

  .single-block-fill-source {
    background-color: #ffffff;
    border-radius: 7px;
    padding: 20px 20px 10px 20px;
    color: #242424;
    height: 212px;
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
  .double-block-fill-source {
    grid-column: 2 / span 2;
    background-color: #ffffff;
    border-radius: 7px;
    padding: 20px 20px 10px 20px;
    color: #242424;
    height: 212px;
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

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: -10px 0 10px 0;
  border-top: 1px solid black;
  width: 100%;
  a {
    color: #242424;
  }
  a:hover {
    color: #ffffff;
  }
  a:visited {
    color: #242424;
  }
  p {
    font-weight: bold;
    margin-left: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
