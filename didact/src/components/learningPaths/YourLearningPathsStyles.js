import styled from "styled-components";

export const LearningPathsWrapper = styled.div`
  margin-right: 30px;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    /* margin: auto; */
    width: 100%;
  }
`;

export const YourLearningPathsWrapper = styled.div`
  /* margin-right: 30px; */
  display: flex;
  width: 100%;

  .mainContent {
    display: flex;
    flex-direction: column;
  }

  .mainContentClosed {
    display: flex;
    flex-direction: column;
  }

  .yourLearningPaths {
    display: flex;
    flex-direction: column;
    max-width: 540px;
    width: 100%;

    @media (max-width: 600px) {
      /* margin: auto; */
      width: 100%;
      max-width: 330px;
    }

    h3 {
      text-align: left;
    }
  }

  .completed {
    background: #ffffff;

    .title h1 {
      color: #242424;
    }
  }

  .buttons {
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    a {
      background-color: #ffffff;
      color: #242424;
      text-decoration: none;
      padding: 20px 30px;
      margin-bottom: 22px;
      border-radius: 19px;
      width: 255px;
      height: 61px;

      &:first-child {
        margin-right: 20px;
      }

      &:hover {
        color: rgba(0, 0, 0, 1);
        background-color: rgba(255, 255, 255, 1);
        border: solid #242424 1px;
        outline: none;
      }
    }
  }

  h1 {
    text-align: left;
    font-size: 30px;
  }

  .buttonsClosed {
    padding-left: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    a {
      background-color: #242424;
      color: #f4f8fa;
      text-decoration: none;
      padding: 20px 30px;
      margin-bottom: 22px;
      border-radius: 19px;
      width: 255px;
      height: 61px;

      &:first-child {
        margin-right: 20px;
      }

      &:hover {
        color: #242424;
        background-color: rgba(255, 255, 255, 1);
        border: solid #242424;
        outline: none;
      }
    }
  }

  h1 {
    text-align: left;
    font-size: 30px;
  }
`;

export const LearningPathCard = styled.div`
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
  max-width: 540px;
  width: 100%;
  background-color: #ffffff;

  @media (max-width: 600px) {
    width: 100%;
    min-width: calc(100vw - 100px);
  }

  .completed {
    background: #d1e2ea;
    width: 100%;
  }

  .title {
    text-align: left;
    width: 100%;

    .pathHeader {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;

      h1 {
        @media (max-width: 600px) {
          font-size: 2rem;
        }
      }

      .notCompleteButton {
        font-size: 2.2rem;
        color: #242424;
        opacity: 0.6;
        cursor: pointer;

        &:hover {
          opacity: 1;
        }
      }

      .completeButton {
        font-size: 2.2rem;
        color: #242424;
        cursor: pointer;
        opacity: 0.6;

        &:hover {
          opacity: 1;
        }
      }
    }

    h1 {
      margin: 0;
      padding-bottom: 20px;
      color: #242424;
    }

    button {
      background-color: #ffffff;
      color: #242424;
      padding: 8px 20px;
      border: 1px solid #242424;
      border-radius: 12px;
      font-weight: bolder;
      text-decoration: none;
      // border: none;
      margin-right: 10px;
      width: 125px;
      height: 35px;

      a {
        color: #242424;
        /* font-weight: bolder; */
        text-decoration: none;
      }

      &:focus {
        outline: none;
      }

      &:hover {
        color: #ffffff;
        background-color: #242424;
        border: solid #242424 1px;
        outline: none;
        cursor: pointer;

        a {
          color: #ffffff;
        }
      }
    }
  }

  .buttons {
    padding: 15px 0px;
    display: flex;
    flex-flow: row wrap;
    justify-items: flex-start;
    text-align: center;

    @media (max-width: 880px) {
      justify-content: center;
      margin: auto;
    }

    a {
      color: #242424;
      background: white;
      text-decoration: none;
      padding: 20px 30px;
      border-radius: 19px;
      font-weight: bold;
      width: 250px;
      margin: 10px;

      /* @media (max-width: 880px) {
            width: 100%;
            padding-bottom: 10px;
        } */

      &:first-child {
        margin-right: 20px;

        @media (max-width: 880px) {
          margin-right: 10px;
        }
      }
    }
  }

  h1 {
    text-align: left;
  }
`;

export const ButtonStyles = styled.div`
  .buttons {
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media (max-width: 880px) {
      padding-left: 0px;
    }

    a {
      background-color: #242424;
      color: #f4f8fa;
      text-decoration: none;
      padding: 20px 30px;
      margin-bottom: 22px;
      border-radius: 19px;
      font-weight: bold;
      width: 255px;
      height: 61px;

      @media (max-width: 880px) {
        width: 100%;
      }

      &:first-child {
        margin-right: 20px;
      }

      &:hover {
        color: #242424;
        background-color: rgba(255, 255, 255, 1);
        border: solid #242424 1px;
        outline: none;
      }
    }
  }
`;
