import styled from "styled-components";

export const MyProfileStyleWrapper = styled.div``;

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: -10px 0 10px 0;
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

export const DiscordLinkDiv = styled.div`
  margin: 15% 80% 0 0;
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

    span {
      padding-bottom: 100px;
      float: right;
      margin-top: 7%;
    }
  }
`;

export const DidactProfileButton = styled.button`
  box-shadow: none;
  border-radius: 7px;
  color: #242424;
  background: #ffffff;
  border: 1px solid #242424;
  height: 25px;
  width: 123px;

  cursor: pointer;
  &:hover {
    color: #ffffff;
    background-color: #242424bf;
    outline: none;
  }
`;

export const EditProfileDiv = styled.div`
  display: flex;

  form {
    display: flex;
    flex-direction: column;

    label {
      font-family: Open Sans;
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 1%;
    }

    textarea {
      height: 200px;
      border-radius: 7px;
      margin-bottom: 5%;
    }

    input {
      height: 30px;
      border-radius: 7px;
      margin-bottom: 2%;
      width: 35%;
    }
  }
`;
