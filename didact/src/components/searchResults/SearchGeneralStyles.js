import styled from "styled-components";

export const Navigator = styled.div`
  width: 50%;
  font-size: 18px;
  display: grid;
  grid-template-column: 1fr 1fr 1fr 1fr;
  grid-gap: 15px;

  span:hover {
    cursor: pointer;
  }
`;

export const TitleH2 = styled.div`
  max-width: 540px;
  width: 100%;
  text-align: left;
  font-size: 2.6rem;
  font-weight: bold;
  padding: 10px;
  font-family: Open sans;
`;

export const PathGrid = styled.div`
  display: grid;
`;

export const CourseGrid = styled.div`
  display: grid;
`;

export const ResourceGrid = styled.div`
  display: grid;
`;
