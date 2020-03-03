import React from "react";
import { Form, Field, Formik } from "formik";
import * as Yup from "yup";
import { registerAction } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  Wrapper,
  RegisterWrapper,
  RegisterFormWrapper,
  Header
} from "./RegisterStyles";
import beURL from "../../utils/beURL";
import RegisterImage from "../../images/computer2.png";

const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Must be an Email"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required")
});

const RegisterForm = props => {
  const state = useSelector(state => state.onboardingReducer);
  const dispatch = useDispatch();
  const registerError = state.registerError;

  if (localStorage.getItem("token")) {
    props.history.push("/");
  }

  const handleRegister = values => {
    dispatch(registerAction(props.history, values));
  };

  return (
    <Wrapper>
      <Header>
        <h1 style={{ fontFamily: "ITC Grouch" }}>Didact</h1>
        <div>{/* <a>About</a>
                    <a>Contact</a> */}</div>
      </Header>
      <img src={RegisterImage} alt="computer on a desk" />
      <RegisterWrapper>
        <RegisterFormWrapper>
          <div className="header">
            <h1>Signup</h1>
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
              confirmPassword: "",
              first_name: "",
              last_name: ""
            }}
            validateOnBlur={false}
            validateOnChange={false}
            validationSchema={RegisterSchema}
            onSubmit={values => {
              const registerValues = {
                email: values.email,
                password: values.password,
                first_name: values.first_name,
                last_name: values.last_name
              };
              handleRegister(registerValues);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="inputWrapper">
                  <div>
                    <div className="nameInputs">
                      <div
                        className={
                          "input size-half" +
                          (touched.first_name && errors.first_name
                            ? " error"
                            : "")
                        }
                      >
                        <p>First Name</p>
                        <Field
                          type="text"
                          name="first_name"
                          placeholder="First Name"
                        ></Field>
                        {touched.first_name && errors.first_name && (
                          <p className="errorMessage">First Name Required</p>
                        )}
                      </div>
                      <div
                        className={
                          "input size-half" +
                          (touched.last_name && errors.last_name
                            ? " error"
                            : "")
                        }
                      >
                        <p>Last Name</p>
                        <Field
                          type="text"
                          name="last_name"
                          placeholder="Last Name"
                        ></Field>
                        {touched.last_name && errors.last_name && (
                          <p className="errorMessage">Last Name Required</p>
                        )}
                      </div>
                    </div>
                    <div
                      className={
                        "input" +
                        (touched.email && errors.email ? " error" : "")
                      }
                    >
                      <p>Email</p>
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
                    <div
                      className={
                        "input" +
                        (touched.confirmPassword && errors.confirmPassword
                          ? " error"
                          : "")
                      }
                    >
                      <p>Confirm Password</p>
                      <Field
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                      ></Field>
                      {touched.confirmPassword && errors.confirmPassword && (
                        <p className="errorMessage">Passwords do not match</p>
                      )}
                    </div>
                    {registerError ? (
                      <p style={{ color: "red" }}>
                        This email address is already being used
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <button type="submit">Signup Now</button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
          <div className="socialButtons">
            <a href={`${beURL}auth/facebook`} className="facebook">
              Signup With Facebook
            </a>
            <a href={`${beURL}auth/google`} className="google">
              Signup With Google
            </a>
          </div>
          <div className="loginLink">
            <p>
              Already have an account? <a href="/login">Login Here</a>
            </p>
          </div>
        </RegisterFormWrapper>
      </RegisterWrapper>
    </Wrapper>
  );
};

export default RegisterForm;
