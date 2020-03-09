import styled from "styled-components";

export const LearningPathWrapper = styled.div`
  /* margin-right: 30px; */
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    margin: auto;
  }

  .breadcrumb {
    display: flex;
    flex-direction: column;

    .breadcrumbTitle {
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        font-weight: bold;
      }

      a {
        text-decoration: none;
        color: black;
        font-weight: bold;
      }
    }

    span {
      border-top: black 1px solid;
      width: 100%;
    }
  }

  .learningPathCards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    text-align: left;

    @media (max-width: 600px) {
      width: 90;
      margin: auto;
      display: flex;
      justify-content: space-evenly;
    }

    .upcomingCards {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      @media (max-width: 600px) {
        width: 100%;
      }

      .long:last-child {
        width: 100%;

        .upcoming {
          max-width: 826px;
        }

        .learningPathCard {
          max-width: 826px;
        }
      }
    }

    .completedCards {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      @media (max-width: 600px) {
        width: 100%;
      }

      .long:last-child {
        width: 100%;

        .upcoming {
          max-width: 826px;
        }

        .learningPathCard {
          max-width: 826px;
        }
      }
    }

    h3 {
      width: 100%;
    }
  }

  .learningPathCourseWrappers {
    text-align: left;

    .completed {
      background: #d1e2ea;
      opacity: 0.5;
      width: 395px;
      color: black;

      @media (max-width: 600px) {
        width: 100%;
        min-width: 320px;
        margin-top: 10px;
      }
    }

    a {
      text-decoration: none;
      min-width: 130px;
      text-align: center;
    }

    .long:last-child {
      max-width: 826px;
      width: 100%;
      margin: 10px;
    }
  }

  .current {
    width: 100%;

    .currentTitle {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .learningPathCard {
      background: #ffffff;
      width: 100%;
      color: black;

      .currentTitle {
        display: flex;

        .notCompleteButton {
          font-size: 2.2rem;
          color: white;
          opacity: 0.6;
          cursor: pointer;

          &:hover {
            opacity: 1;
          }
        }

        .completeButton {
          font-size: 2.2rem;
          color: black;
          cursor: pointer;
        }
      }
    }

    .editLearningButton {
      font-size: 0.8rem;
      margin-right: 20px;
      color: #2424247d;
      font-weight: bold;

      a {
        color: black;
        text-decoration: none;
      }
    }
  }

  .upcoming {
    max-width: 395px;
    width: 100%;
    margin-bottom: 52px;

    @media (max-width: 600px) {
      width: 100%;
      margin: auto;
    }

    .learningPathCard {
      background: #adc8d9;
      color: black;
      max-width: 395px;
      width: 100%;
      margin: 10px;
    }
  }

  .item {
    .learningPathCard {
      background: #d1e2ea;
      color: black;
      max-width: 826px;
      min-width: 395px;
      width: 100%;
      margin: 10px;
    }

    .learningPathCard.completed {
      margin: 0;
    }
  }

  .completed {
    margin-bottom: 52px;
  }

  .learningPathCard {
    color: white;
    background: white;
    padding: 35px 43px 30px 30px;
    border-radius: 19px;
    width: 540px;
    height: 330px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      margin: 0;
      font-size: 2.4rem;
      max-height: 68px;
      overflow: hidden;
    }

    p {
      margin: 0;
      margin-top: 25px;
      max-height: 100px;
      overflow: hidden;
    }

    .goToCourse {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 25px;

      div {
        display: flex;
        align-items: center;

        h4 {
          margin-left: 15px;
        }
      }

  //     a {
  //       background-color: #242424;
  //       color: white;
  //       padding: 10px 15px;
  //       border-radius: 16px;
  //       font-weight: bolder;
  //     }

  //     h4 {
  //       margin: 0;
  //     }
  //   }
  // }
`;
