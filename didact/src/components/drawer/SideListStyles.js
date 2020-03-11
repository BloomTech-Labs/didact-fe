import styled from "styled-components";

export const SideListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // height: 100%;
  background: #eeeeee;
  overflow-y: hidden;
  height: 100vh;

  ::-webkit-scrollbar {
    overflow: hidden;
    overflow-y: scroll;
  }
`;
