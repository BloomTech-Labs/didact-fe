import styled from "styled-components";

export const ResourceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr, 3);
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
