import styled from "styled-components";

export const MyProfileStyleWrapper = styled.div``;

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: -10px 0 10px 0;
  border-top: 1px solid black;
  width: 100%;
  a {
    color: #242424;
  }
  a:hover {
    color: #ffffff;
  }
  a:visited {
    color: #242424;
  }
  p {
    font-weight: bold;
    margin-left: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const ProfileAvatar = styled.div`
  margin: 5% 55% 10% 0;
  display: flex;
  width: 150px;
  justify-content: space-between;
`;

export const BioField = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;

export const BioLabel = styled.label`
  // margin: 15px 0 0 20px;
  margin: 1% 50% 0 0;
  padding-bottom: 0;
  color: #696d6e;
`;

export const BioInput = styled.textarea`
  width: 50%;
  height: 82px;
  word-wrap: break;
  background: #f4f8fa;
  border: #d1e2ea solid 1px;
  border-radius: 8px;
  padding-left: 12px;
  display: flex;
  margin: 1% 50% 0 0;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.5);
  outline: none;
  ::placeholder {
    color: #90a1ac;
  }
`;

export const BioButton = styled.button`
  width: 10%;
  height: 35px;
  background: #f4f8fa;
  border: #d1e2ea solid 1px;
  border-radius: 8px;
  padding-left: 12px;
  display: flex;
  margin: 1% 50% 0 0;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.5);
  outline: none;
  cursor: pointer;
  ::placeholder {
    color: #90a1ac;
  }
`;

export const DiscordLinkDiv = styled.div`
  margin: 5% 80% 0 0;
  display: flex;
  width: 100%;

  a {
    text-decoration: none;
    color: #242424;
    font-family: Open Sans;
    font-weight: bold;

    img {
      margin: 0 auto;
    }
  }
`;
