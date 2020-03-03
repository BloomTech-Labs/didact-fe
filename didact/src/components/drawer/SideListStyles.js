import styled from "styled-components";

export const SideListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background: #eeeeee;
  overflow: hidden;

  // margin-right: 50%;

  // profile section

  .profileSection {
    width: 235px;
    margin: 0 auto;
    /* padding-top: 17px; */
    /* padding-bottom: 24px; */
    padding: 17px 15px 24px 15px;
    border-top: #7070704a 1px solid;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-weight: bold;
    }
    p.logout {
      font-weight: normal;
      color: #2424246e;
      font-size: 1.2rem;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
