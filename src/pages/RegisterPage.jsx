import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import EndPoints from "../api/EndPoints";

const RegisterPage = () => {
  //-------------------------------------------------------------------
  // regular form method:

  // const [user,setUser] = useState({
  //     firstName:"",
  //     email:"",
  //     mobile:"",
  //     password:""

  // })

  // function onChangeHandler(event){
  //     const {name,value} = event.target;
  //     console.log(value)
  //     setUser({...user,[name]:value})
  // }
  //-------------------------------------------------------------------

  // using formik- as a hook- useformik method

  const initialValues = {
    firstName: "",
    email: "",
    mobile: "",
    password: "",
  };

  const [requestResponse, setRequestResponse] = useState({
    textMessage: "",
    alertClass: "",
  });
  //----------------------------------------------------------------------------

  //instead of this - we can use yup as below:

  //   const validate = (values) => {
  //     let errors = {};
  //     if (!values.firstName) {
  //       errors.firstName = "fisrt name is required";
  //     }
  //     if (!values.email) {
  //       errors.email = "email is required";
  //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //       errors.email = "Email must be an valid email address";
  //     }

  //     if (!values.mobile) {
  //       errors.mobile = "mobile is required";
  //     }
  //     if (!values.password) {
  //       errors.password = "password is required";
  //     }
  //     return errors;
  //   };

  //-----------------------------------------------------------------------------

  const validationSchema = Yup.object({
    firstName: Yup.string().required("FirstName is must"),
    email: Yup.string().required("email is must").email("Enter a valid email"),
    mobile: Yup.string().required("mobile is must"),
    password: Yup.string()
      .required("Password is must")
      .min(6, "Minimum 6 characters long"),
  });
  const onSubmit = (values) => {
    axios
      .post(EndPoints.REGISTER_URL, values)
      .then(
        (response) => {
          setRequestResponse({
            textMessage: response.data.message,
            alertClass: "alert alert-danger",
          });
        },
        (error) => {
          setRequestResponse({
            textMessage: error.response.data.message,
            alertClass: "alert alert-success",
          });
        }
      )
      .catch((err) => console.log(err));
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    validateOnMount: true,
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
            <h2 className="text-center">Register</h2>
            <hr />
            <form onSubmit={formik.handleSubmit}>
             
              <div className="form-group">  
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.touched.firstName && formik.errors.firstName
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />
                {formik.errors.firstName && formik.touched.firstName ? (
                  <small className="text-danger">
                    {formik.errors.firstName}
                  </small>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.touched.email && formik.errors.email
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />
                {formik.errors.email && formik.touched.email ? (
                  <small className="text-danger">{formik.errors.email}</small>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="">Mobile</label>
                <input
                  type="number"
                  name="mobile"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.touched.mobile && formik.errors.mobile
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />
                {formik.errors.mobile && formik.touched.mobile ? (
                  <small className="text-danger">{formik.errors.mobile}</small>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.touched.password && formik.errors.password
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />
                {formik.errors.password && formik.touched.password ? (
                  <small className="text-danger">
                    {formik.errors.password}
                  </small>
                ) : null}
              </div>
              <input
                type="submit"
                value="Register"
                className="btn btn-primary btn-block"
                disabled={!formik.isValid}
              />
            </form>
            <br />
            <p className="text-center">
              Already registered <br />
              <Link to="/login">Click here</Link>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default RegisterPage;
