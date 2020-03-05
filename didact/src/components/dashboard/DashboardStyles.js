import styled from "styled-components";

export const TopDashboardCard = styled.div`
  @media (max-width: 600px) {
    width: 100%;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-radius: 7px;
  padding: 35px 33px 35px 10px;
  margin-bottom: 28px;
  max-width: 728px;
  width: 100%;
  background-color: #ffffff;

  @media (max-width: 600px) {
    width: 100%;
    min-width: calc(100vw - 100px);
  }

//   .completed {
//     background: #d1e2ea;
//     width: 100%;
//   }

//   .title {
//     text-align: left;
//     width: 100%;

//     .pathHeader {
//       display: flex;
//       width: 100%;
//       justify-content: space-between;
//       align-items: center;

//       h1 {
//         @media (max-width: 600px) {
//           font-size: 2rem;
//         }
//       }

//       .notCompleteButton {
//         font-size: 2.2rem;
//         color: black;
//         opacity: 0.6;
//         cursor: pointer;

//         &:hover {
//           opacity: 1;
//         }
//       }

//       .completeButton {
//         font-size: 2.2rem;
//         color: black;
//         cursor: pointer;
//         opacity: 0.6;

//         &:hover {
//           opacity: 1;
//         }
//       }
//     }

//     // h1 {
//     //   margin: 0;
//     //   padding-bottom: 20px;
//     //   color: black;
//     // }

//     button {
//       background-color: #242424;
//       color: black;
//       padding: 8px 20px;
//       border-radius: 12px;
//       font-weight: bolder;
//       text-decoration: none;
//       border: none;
//       margin-right: 10px;
//       width: 125px;
//       height: 35px;
//       border: transparent solid 1px;

//       a {
//         color: black;
//         /* font-weight: bolder; */
//         text-decoration: none;
//       }

//       &:focus {
//         outline: none;
//       }

//       &:hover {
//         color: rgba(0, 0, 0, 1);
//         background-color: rgba(255, 255, 255, 1);
//         border: solid black 1px;
//         outline: none;
//         cursor: pointer;

//         a {
//           color: black;
//         }
//       }
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
