import styled from "styled-components";

export const TopDashboardCard = styled.div`
  @media (max-width: 600px) {    
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-radius: 7px;
  padding: 35px 33px 35px 30px;
  margin-bottom: 28px;
  max-width: 728px;
  width: 100%;
  background-color: #ffffff;
  text-align: left;

  @media (max-width: 600px) {
    width: 100%;
    min-width: calc(100vw - 100px);
  }
    }`;

export const CoursesCard = styled.div`
  display: flex;
  flex-flow: column nowrap;
  border-radius: 7px;
  background-color: white;
  width: 100%;
  max-width: 540px;

  div {
    border-top: 1px solid #eeeff3;
  }

  div:first-child {
    border: none;
  }

  div:nth-child(2) {
    border: none;
  }
`;

export const CourseMenuDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  color: #9397a3;
`;

export const CourseDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  div {
    margin: 20px 5px;

    &:first-child {
      margin-left: 20px;
    }

    &:last-child {
      margin-right: 30px;
    }
  }
  .picture {
    width: 100px;
    height: 100px;
    background: #eeeff3;
    border-radius: 19px;
  }

  .info {
    margin-top: -7px;
    width: 160px;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    a {
      text-decoration: none;
      color: black;

      &:hover {
        text-decoration: underline;
      }
    }

    .title {
      font-weight: bold;
      max-height: 40px;
      overflow: hidden;
    }

    .source {
      color: #9397a3;
    }
  }
`;
