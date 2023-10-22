import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import EndPoints from "../api/EndPoints";

function LoginPage() {
  const initialValues = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();
  
  const [requestResponse, setRequestResponse] = useState({
    textMessage: "",
    alertClass: "",
  });
  function onSubmit(values) {
    axios
      .post(EndPoints.LOGIN_URL, values)
      .then(
        (response) => {
          setRequestResponse({
            textMessage: 'Login is successful',
            alertClass: "alert alert-danger",
          });
          localStorage.setItem('token',response.data.token);
          localStorage.setItem('user',JSON.stringify(response.data.user));
          navigate('/')
        },
        (error) => {
          setRequestResponse({
            textMessage: error.response.data.message,
            alertClass: "alert alert-success",
          });
        }
      )
      .catch((err) => console.log(err));
  }
  const validations = Yup.object({
    email: Yup.string().email("valid email is must").required("email is must"),
    password: Yup.string()
      .required("password is required")
      .min(6, "password must be 6 characters long"),
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="wrapper">
          <div class={requestResponse.alertClass} role="alert">
              {requestResponse.textMessage}
            </div>
            <h2>Login</h2>
            <hr />
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validations}
              validateOnMount
            >
              {(formik) => {
                return (
                  <Form>
                    <div className="form-group">
                      <label>Email</label>
                      <Field
                        type="email"
                        name="email"
                        className={
                          formik.errors.email && formik.touched.email
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />
                      <ErrorMessage name="email">
                        
                      {(ErrorMessage) => 
                        
                            <span className="text-danger">{ErrorMessage}</span>
                          }
                       
                      </ErrorMessage>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <Field
                        type="password"
                        name="password"
                        className={
                          formik.errors.password && formik.touched.password
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />
                      <ErrorMessage name="password">
                        
                          {(error) => 
                            <span className="text-danger">{error}</span>
                          }
                       
                      </ErrorMessage>
                    </div>
                    <input
                      type="submit"
                      value="Login"
                      className="btn btn-primary btn-block"
                      disabled={!formik.isValid}
                    />
                  </Form>
                );
              }}
            </Formik>
            <p>
              New User? <Link to="/register">Click Here</Link>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default LoginPage;
