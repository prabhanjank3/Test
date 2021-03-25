import React from "react";
import {} from "react-bootstrap";
import "./css/LoginPage.css";
import { useFormik } from "formik";
export default (props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      props.handleSubmit(values);
    }
  });
  return (
    <section>
      <section className="authform-box-section">
        <div className="authform-box-div">
          <form>
            <h3 className="form-heading text-center">Log in</h3>

            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={formik.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                name="password"
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={formik.handleChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-dark btn-lg btn-block"
              onClick={formik.handleSubmit}
            >
              Sign in
            </button>
            <p className="forgot-password text-center">
              Forgot <a href="#">password?</a>
            </p>
          </form>
        </div>
      </section>
    </section>
  );
};
