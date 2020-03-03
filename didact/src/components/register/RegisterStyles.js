import styled from "styled-components";

export const RegisterFormWrapper = styled.div`
  width: 510px;
  margin: 0 auto;
  padding-bottom: 50px;
  padding-top: 20px;
  @media (max-width: 600px) {
    width: 475px;
  }
  .header {
    text-align: left;
  }
  form {
    margin-bottom: 30px;
    box-shadow: 0px 0px 5px 0px rgba(237, 237, 237, 1);
    .inputWrapper {
      margin: 10px;
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
      .nameInputs {
        display: flex;
        justify-content: space-between;
        .size-half {
          width: 45%;
          margin-bottom: 0px;
        }
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
  .loginLink {
    padding-top: 40px;
    p {
      margin: 0;
    }

    a {
      color: #242424bf;
      font-weight: bold;
    }
  }
`;

export const RegisterWrapper = styled.div`
  position: absolute;
  left: 38%;
  right: 0;
  top: 50px;
  bottom: 0;
  margin: auto;
  width: 670px;
  min-width: 375px;
  height: 770px;
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
  margin: 0 auto 50px auto;
  position: relative;
  img {
    position: absolute;
    left: 0;
    right: 100%;
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
