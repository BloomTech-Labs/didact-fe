import styled from "styled-components";

export const Navigator = styled.div`
  width: 50%;
  font: Bold 13px/24px Open Sans;
  display: flex;

  span {
    margin-right: 15px;
    padding: 5px 0;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const TitleH2 = styled.div`
  max-width: 540px;
  width: 100%;
  text-align: left;
  font-size: 2.6rem;
  font-weight: bold;
  padding: 10px 0;
  font-family: Open sans;

  span {
    margin-left: 25px;
    font-size: 16px;
  }
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
