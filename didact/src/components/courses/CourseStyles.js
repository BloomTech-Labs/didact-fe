import styled from "styled-components";

export const BasicCourseCard = styled.div`
  background-color: #ffffff;
  border-radius: 7px;
  padding: 20px;
  margin: 20px 0;
  text-align: left;
  color: #242424;
  font-family: Open Sans;

  .course-header {
    display: flex;
    justify-content: space-between;
    align-items: start;

    h3 {
      width: 80%;
      color: #242424;
      font-size: 2rem;
      margin: 5px 0;
    }
  }

  .instructors {
    width: 100%;
    margin-top: 10px;
    span {
      font-size: 1.3rem;
      font-weight: 600;
    }
  }

  p {
    font-size: 1.3rem;
    font-weight: 600;
  }

  .link-div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    a {
      font-weight: 600;
      text-align: right;
      color: #242424;
      display: flex;
      align-items: center;

      &:visited {
        color: #242424;
      }
    }
  }
`;

export const AddCourseToPath = styled.div`
  top: 153px;
  left: 694px;
  width: 296px;
  min-height: 332px;
  height: 100%;
  border-radius: 20px;
  opacity: 1;
  /* padding: 20px; */

  .learningPaths {
    padding: 20px;
    text-align: center;

    .learningPathTitle {
      display: flex;
      border: black;
      justify-content: space-between;
      text-align: left;

      button {
        border: none;
        background: none;

        &:focus {
          outline: none;
        }
      }
    }
  }

  .closePopover {
    display: flex;
    justify-content: flex-end;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      /* top: 374px;
            left: 767px; */
      width: 147px;
      /* height: 49px;
            background: #C8B198 0% 0% no-repeat padding-box;
            border-radius: 20px;
            opacity: 1;
            border: none;

            &:focus {
                outline: none;
            } */
    }

    a {
      padding-top: 25px;
      padding-bottom: 30px;
      color: black;
      text-decoration: none;
    }
  }
`;

export const PopoverWrapper = styled.div`
  margin: 0 auto;

  button {
    &:focus {
      outline: none;
    }
  }
`;
