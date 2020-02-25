import styled from "styled-components";

export const PageFlex = styled.div`
  width: 100%;
  display: flex;
  /* width: auto; */

  .drawer {
    padding-right: 20px;
  }

  .headerMain {
    /* padding-left: 50px; */
    min-width: 826px;
    width: 100%;
    margin: 0 0 0 15px;

    .header {
      min-width: 825px;
      width: 100%;
      display: flex;
      background: #ebe8e1;
      border-radius: 19px;
      margin-top: 10px;
      justify-content: space-between;
      align-items: center;
      color: black;
      padding: 10px 15px;

      h2 {
        margin: 0px 0px;
        font-family: ITC Grouch;
        font-size: 32px;
      }

      .navSection {
        width: 100%;
        max-width: 250px;
        display: flex;
        align-items: center;
        justify-self: "flex-end";
        justify-content: flex-end;
      }
    }
  }
`;
