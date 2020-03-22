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

export const profileDivRender = styled.nav`
  display: flex;
  justify-content: space-between;
  background: green;
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
