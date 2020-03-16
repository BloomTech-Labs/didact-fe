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
        color: #242424;
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
      // margin-bottom: 10%;
      
      @media (max-width: 600px) {
        width: 100%;
      }

      .long:last-child {
        width: 100%;

        .upcoming {
          max-width: 826px;
          // margin-bottom: 10%;
        }

        .learningPathCard {
          max-width: 826px;
          display: flex;
          justify-content: flex-start;
          

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
          // margin-bottom: 10%;
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
      background: #ffffff;
      opacity: 0.5;
      width: 395px;
      color: #242424;
       
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

  .currentPath {
    width: 549px;
    

    .currentTitle {
      display: flex;
      align-items: flex-start;
      color: #242424;
      // margin-top: 5%;
      
    }

    .learningPathCard {
      background: #eeeeee;
      width: 549px;
      color: #242424;
      display: flex;
      justify-content: flex-start;
      margin-bottom: 5%;
      padding: 0 0 0 0;
      margin-top: -3%;
      
      .currentTitle {
        display: flex;

        .notCompleteButton {
          font-size: 2.2rem;
          color: #242424;
          opacity: 0.6;
          cursor: pointer;
          margin-left: 15%;
          margin-top: -3%;

          &:hover {
            opacity: 1;
          }
        }

        .completeButton {
          font-size: 2.2rem;
          color: #242424;
          cursor: pointer;
        }
      }
    }
    }

    .editLearningButton {
      font-size: 0.8rem;
      margin-right: 20px;
      color: #242424;
      font-weight: bold;

      a {
        color: #242424;
        text-decoration: none;
      }
    }
  }

  .upcoming {
    max-width: 395px;
    width: 100%;
    margin-bottom: 10%;

    @media (max-width: 600px) {
      width: 100%;
      margin: auto;
    }

    .learningPathCard {
      background: #ffffff;
      color: #242424;
      max-width: 826px;
      min-width: 395px;
      width: 100%;
      margin: 0 auto;
      
    }
  }



  .item {
    .learningPathCard {
      background: #ffffff;
      color: #242424;
      width: 549px;
      min-width: 395px;
      width: 100%;
      // margin-bottom: 20px;
    }

    .learningPathCard.completed {
      margin-bottom: 10%;
    }
  }

  .completed {
    margin-bottom: 10%;
  }

  .learningPathCard {
    color: #242424;
    background: #ffffff;
    padding: 35px 43px 30px 30px;
    
    border-radius: 7px;
    width: 449px;
    height: 330px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: flex-start;

    currentPath {
      // display: flex;
      // justify-content: flex-start;
      
    }

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
      
    
      {
        a {
          display: flex;
          justify-content: space-between;
          margin: 9% 0% 2% 0%;
          color: #242424;
          font-weight: bold;
          font-family: Open Sans;
          
        }
      }
      

      div {
        display: flex;
        // align-items: center;
        justify-content: flex-start;

        h4 {
          // marginTop: 19%;
        }

        
      // }
`;
