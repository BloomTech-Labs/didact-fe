import styled from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background: #eeeeee;
  padding: 17px 15px 24px 15px;
  // margin-right: 50%;

  .profileSection {
    width: 235px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    // border: 1px solid black;

    p {
      font-weight: bold;
    }

    p.profile-avatar {
      margin-left: 30%;
    }

    p.logout {
      font-weight: normal;
      color: #2424246e;
      font-size: 1.2rem;
      margin-left: 10%;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
