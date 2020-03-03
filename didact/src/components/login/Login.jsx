import React from "react";
import { Form, Field, Formik } from "formik";
import * as Yup from "yup";
import { loginAction } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

import { Wrapper, LoginWrapper, LoginFormWrapper, Header } from "./LoginStyles";

import LoginImage from "../../images/computer.png";

import beURL from "../../utils/beURL";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email(),
  password: Yup.string().required("Password is required")
});

const LoginForm = props => {
  const state = useSelector(state => state.onboardingReducer);
  const dispatch = useDispatch();
  const loginError = state.loginError;

  const handleLogin = values => {
    dispatch(loginAction(props.history, values));
  };

  return (
    <Wrapper>
      <Header>
        <h1 style={{ fontFamily: "ITC Grouch" }}>Didact</h1>
        <div>{/* <a>About</a>
                    <a>Contact</a> */}</div>
      </Header>
      <img src={LoginImage} alt="computer on a desk" />
      <LoginWrapper>
        <LoginFormWrapper>
          <div className="header">
            <h1>Login</h1>
          </div>
          <Formik
            initialValues={{
              email: "",
              password: ""
            }}
            validateOnChange={false}
            validateOnBlur={false}
            validationSchema={LoginSchema}
            onSubmit={values => {
              handleLogin(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="inputWrapper">
                  <div>
                    <div
                      className={
                        "input" +
                        (touched.email && errors.email ? " error" : "")
                      }
                    >
                      <p>Email Address</p>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                      ></Field>
                      {touched.email && errors.email && (
                        <p className="errorMessage">Invalid Email Address</p>
                      )}
                    </div>
                    <div
                      className={
                        "input" +
                        (touched.password && errors.password ? " error" : "")
                      }
                    >
                      <p>Password</p>
                      <Field
                        type="password"
                        name="password"
                        placeholder="Password"
                      ></Field>
                      {touched.password && errors.password && (
                        <p className="errorMessage">Invalid Password</p>
                      )}
                    </div>
                    {loginError ? (
                      <p style={{ color: "red" }}>
                        You have entered an invalid email or password
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <button type="submit">Login</button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
          <div className="socialButtons">
            <a href={`${beURL}auth/facebook`} className="facebook">
              LogIn With Facebook
            </a>
            <a href={`${beURL}auth/google`} className="google">
              LogIn With Google
            </a>
          </div>
          <div className="registerLink">
            <p>
              Don't have an account yet? <a href="/register">Register Here</a>
            </p>
          </div>
        </LoginFormWrapper>
      </LoginWrapper>
    </Wrapper>
  );
};

export default LoginForm;
