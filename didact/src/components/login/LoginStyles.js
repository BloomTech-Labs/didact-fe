import styled from "styled-components";

export const LoginFormWrapper = styled.div`
  width: 575px;
  margin: 0 auto;
  padding-bottom: 35px;
  padding-top: 60px;

  @media (max-width: 600px) {
    width: 475px;
  }

  .header {
    text-align: center;
    padding-bottom: 40px;

    h1 {
      margin: 0;
    }
  }

  form {
    margin-bottom: 30px;
    padding-bottom: 45px;
    padding-top: 25px;
    box-shadow: 0px 0px 5px 0px rgba(237, 237, 237, 1);

    .inputWrapper {
      margin: 0px 29px;
      /* border: 1px solid black; */

      .input {
        display: flex;
        flex-direction: column;
        margin: 20px 0px;

        p {
          font-size: 12px;
          align-self: flex-start;
          margin: 5px 15px;
          color: rgb(116, 138, 161);
        }

        input {
          width: 100%;
          box-sizing: border-box;
          background: rgb(244, 248, 250);
          border: solid 1px rgb(235, 237, 244);
          padding: 15px;
          border-radius: 4px;

          &:focus {
            outline: none;
          }
        }

        .errorMessage {
          color: red;
          margin-bottom: 0;
        }
      }

      .input.error {
        input {
          border: red solid 1px;
        }
      }

      button {
        width: 100%;
        background: rgb(91, 91, 91);
        color: white;
        border-radius: 4px;
        border: none;
        padding: 15px;
        font-size: 16px;
        margin: 20px 0px;
      }
    }
  }

  .socialButtons {
    display: flex;
    justify-content: center;
    a {
      text-decoration: none;
      color: white;
      width: 204px;
      border-radius: 4px;
      padding: 15px;

      &:first-child {
        margin-right: 24px;
      }
    }

    .facebook {
      background: #255b9b;
    }

    .google {
      background: #d82c32;
    }
  }

  .registerLink {
    padding-top: 50px;

    p {
      margin: 0;
    }

    a {
      color: #242424bf;
      font-weight: bold;
    }
  }
`;

export const LoginWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 100%;
  top: 50px;
  bottom: 0;
  margin: auto;
  width: 670px;
  max-width: 729px;
  min-width: 375px;
  height: 750px;
  background: white;
  border-radius: 4px;
  margin: 0 auto;
  margin-top: 50px;

  @media (max-width: 600px) {
    width: 500px;
    position: relative;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  div {
    a:first-child {
      margin-right: 33px;
    }
  }
`;

export const Wrapper = styled.div`
  width: calc(100% - 20px);
  margin: 0 auto 0 auto;
  position: relative;

  img {
    position: absolute;
    left: 20%;
    right: 0;
    top: 1000px;
    bottom: 0;
    margin: auto;
  }

  @media (max-width: 600px) {
    margin: 0;

    img {
      display: none;
    }
  }
`;
