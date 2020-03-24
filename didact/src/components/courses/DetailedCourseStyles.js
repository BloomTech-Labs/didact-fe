import styled from "styled-components";

export const DetailedCourseWrapper = styled.div`
  width: 100%;
  box-shadow: "none";

  .courseWrapper {
    width: 100%;
    background-color: #ffffff;
    color: #242424;

    .course-header {
      backgroundColor: "#ffffff",
      display: "flex",
      alignItems: "center",
      padding: "0px",
      margin: "0px",
      color: "black",
      justifyContent: "space-between"
    }

    .courseFooter {
      margin: 0;
      padding: 0;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      color: black;
      background-color: #ffffff;

      .buttons {
        margin: 0;
        padding: 0;
      }

      .tags {
        display: flex;
        justify-content: flex-start;
        padding-left: 0;
        flex-flow: row wrap;
        width: 100%;
        color: black;
        background-color: #ffffff;
      }
    }
  }

  .notCompleteButton {
    font-size: 2.2rem;
    color: black;
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

  .expansionPanel {
    margin: 20px 0px;
    padding: 15px 30px;
    box-shadow: "none";
    color: black;
    background-color: #ffffff;
    max-width: 540px;
    width: 100%;

    .expansionPanelSummary {
      margin: 0;
      padding: 0;
      color: black;
      background-color: #ffffff;
    }

    div {
      padding: 0;
      margin: 0;
      border-radius: 19px;
      color: black;
      background-color: #ffffff;
    }

    &:before {
      height: 0px;
    }

    &:last-child {
      border-radius: 19px;
    }

    .expandIcon {
      :hover {
        background: lightgray;
        border-radius: 50%;
      }
    }
  }

  .lessonExpansionPanel {
    margin: 20px 0px;
    padding: 15px 30px;
    box-shadow: none;
    font-size: 1.2rem;
    max-width: 540px;
    width: 100%;

    .lessonExpansionSummary {
      display: flex;
      justify-content: space-between;
      width: 100%;

      h4 {
        font-size: 14px;
      }
    }

    .lessonTitle {
      display: flex;
      flex-direction: column;

      .lessonTitleName {
        font-weight: bold;
        margin-bottom: 0px;
        margin-top: 8px;
        text-decoration: none;
        color: black;

        &:hover {
          text-decoration: underline;
        }
      }

      .lessonTitleType {
        color: lightgray;
        font-size: 12px;
        margin-top: 0;
        text-transform: uppercase;
      }
    }

    &:before {
      height: 0px;
    }
  }

  div {
    background: white;
    border-radius: 19px;
    margin: 20px 0px;
    padding: 25px 30px;
    text-align: left;

    .expansionWrapper {
      margin: 0;
      padding: 0;
    }
  }

  span.tag {
    text-transform: uppercase;
    margin: 5px 10px 5px 0px;
  }
`;
