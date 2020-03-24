import styled from "styled-components";

export const BasicCourseCard = styled.div`
  background-color: #ffffff;
  border-radius: 7px;
  padding: 20px;

  .course-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      fontfamily: "Open Sans";
      color: "#242424";
      fontsize: "2rem";
      margin: 5px 0;
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
  margin: "0 auto";

  button {
    &:focus {
      outline: none;
    }
  }
`;
