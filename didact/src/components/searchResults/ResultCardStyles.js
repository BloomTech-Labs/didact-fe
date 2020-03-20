import styled from "styled-components";

export const ResourceCard = styled.div`
  background-color: #ffffff;
  border-radius: 7px;
  padding: 20px 20px 10px 20px;
  display: flex;
  font-size: 1.2rem;
  flex-flow: column nowrap;

  h1 {
    font-size: 1.2rem;
  }

  a {
    text-align: right;
    display: flex;
    align-items: center;
    color: #242424;
    font-weight: 600;
  }
`;

export const PathCard = styled.div`
  background-color: #ffffff;
  border-radius: 7px;
  padding: 20px 20px 10px 20px;
  display: grid;
  grid-template-rows: 20px 160px 60px 40px;
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
    }
  }

  a {
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
  padding: 20px 20px 10px 20px;
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
    display: flex;
    flex-flow: column nowrap;

    align-items: flex-end;
    h1 {
      font-size: 1.6rem;
    }

    a {
      font-weight: 600;
      display: flex;
      align-items: center;

      &:visited {
        color: #242424;
      }
    }
  }
`;
