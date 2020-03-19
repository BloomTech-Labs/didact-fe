import styled from "styled-components";

export const Navigator = styled.div`
  width: 50%;
  font: Bold 1.3rem Open Sans;
  display: flex;
  margin-bottom: 20px;
  span {
    margin-right: 15px;
    padding: 5px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const TitleH2 = styled.div`
  max-width: 540px;
  width: 100%;
  text-align: left;
  font-size: 2rem;
  font-weight: bold;
  padding: 10px 0;
  font-family: Open sans;

  span {
    margin-left: 25px;
    font-size: 16px;
  }

  .sub-span-results {
    font: SemiBold 1rem Open Sans;
    cursor: pointer;
    color: #242424;
  }
  .sub-span-no-results {
    font: SemiBold 1rem Open Sans;
    color: #242424;
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
