import styled from "styled-components";

export const PathCard = styled.div`
  background-color: #ffffff;
  border-radius: 7px;
  padding: 20px 20px 10px 20px;
  display: grid;
  grid-template-rows: 20px 160px 60px 40px;

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
    display: flex;
    align-items: center;
  }
`;

export const CourseCard = styled.div`
  background-color: #ffffff;
  border-radius: 7px;
  padding: 20px 20px 10px 20px;

  span {
    font-size: 1rem;
    cursor: pointer;
  }
`;
