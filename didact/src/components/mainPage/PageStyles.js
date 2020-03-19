import styled from "styled-components";

export const MainBorder = styled.div`
  width: 100%;
  border-top: 1px solid black;
`;

export const PageFlex = styled.div`
  width: 100%;
  display: flex;
  position: left;

  /* width: auto; */

  .drawer {
    // padding-right: 10px;
  }

  .headerMain {
    // padding-left: 50px;
    min-width: 826px;
    width: 100%;
    margin: 0 auto;

    .header {
      min-width: 825px;
      width: 100%;
      display: flex;
      background: #eeeeee;
      margin-top: 10px;
      justify-content: space-between;
      align-items: center;
      color: black;
      padding: 20px 0;

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
