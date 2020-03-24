import styled from "styled-components";

export const ResourceCard = styled.div`
  background-color: #ffffff;
  border-radius: 7px;
  padding: 20px 20px 10px 20px;
  display: flex;
  font-size: 1.2rem;
  flex-flow: column nowrap;

  .img-div {
    object-fit: cover;
    display: grid;
    grid-auto-row: 70%;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  h1 {
    font-size: 1.7rem;
  }

  .head-div {
    height: 70%;
    display: flex;
    justify-content: start;
  }

  .link-div {
    display: flex;
    justify-content: flex-end;
  }

  a {
    text-align: right;
    display: flex;
    align-items: center;
    color: #242424;
    font-weight: 600;

    &:visited {
      color: #242424;
    }
  }
`;

export const ResourceFillSmall = styled.div`
  background-color: #ffffff;
  border-radius: 7px;
  padding: 20px 20px 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  .img-div {
    object-fit: cover;
    grid-auto-row: 70%;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
`;

export const ResourceFillLarge = styled.div`
  background-color: #ffffff;
  border-radius: 7px;
  padding: 20px 20px 10px 20px;
  .circle {
    border-radius: 30px;
    height: 59px;
    width: 59px;
    background-color: rgba(242, 212, 174, 1);
    position: relative;
    top: 12px;
    right: -187px;
  }
  img {
    position: relative;
    z-index: 2;
    top: -75px;
    right: 5px;
  }
`;

export const PathCard = styled.div`
  background-color: #ffffff;
  border-radius: 7px;
  padding: 20px 20px 10px 20px;
  display: grid;
  grid-template-rows: 20px 150px 60px 30px;
  color: #242424;
  h3 {
    margin: 0;
    font-size: 1.3rem;
    text-align: right;
  }

  h1 {
    font-size: 1.7rem;
    text-align: left;
  }

  .img-div {
    object-fit: cover;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .low-div {
    display: flex;
    justify-content: space-between;

    div {
      text-align: left;
      font-size: 1.2rem;
      font-weight: 600;
      display: flex;
      flex-flow: column nowrap;
      padding-bottom: 20px;
    }
  }

  a {
    color: #242424;
    font-weight: 600;
    display: flex;
    align-items: center;

    &:visited {
      color: #242424;
    }
  }
`;

export const CourseCard = styled.div`
  background-color: #ffffff;
  border-radius: 7px;
  padding: 10px;
  color: #242424;
  display: grid;
  grid-template-columns: 45% 55%;

  .img-div {
    object-fit: cover;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .right-div {
    h1 {
      margin: 0;
      font-size: 1.6rem;
      height: 60%;
    }

    a {
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      color: #242424;

      &:visited {
        color: #242424;
      }
    }
  }
`;
