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
  width: 100%;
  text-align: left;
  font-size: 2rem;
  font-weight: bold;
  padding: 10px 0;
  font-family: Open sans;
  display: flex;
  margin: 10px 0;
  span {
    display: flex;
    align-items: center;
    margin-left: 25px;
    font-size: 1.4rem;
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
  width: 100%;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 300px;
`;

export const CourseGrid = styled.div`
  width: 90%;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 150px;
`;

export const ResourceGrid = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 20% 45% 25%;
  grid-template-rows: 140px;
`;
