import styled from "styled-components";

export const ResourceWrapper = styled.div`
  .title {
    display: flex;
    justify-content: start;
  }
  .title-admin {
    display: flex;
    flex-flow: row no-wrap;
    justify-content: space-between;
  }
`;

export const ResourceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 31%);
  justify-content: space-between;
  align-items: start;
  grid-auto-row: 200px;
  grid-gap: 30px;
`;

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: -10px 10px 10px 10px;
  border-bottom: 1px solid black;

  p {
    font-weight: bold;
    margin-left: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
