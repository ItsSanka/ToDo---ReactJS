import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../AuthContext/AuthContext";
import NavBar from "../Nav/Nav";
import "./Login.css";

const Login = () => {
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Password should be 6 chars minimum")
        .required("Required"),
    }),
    onSubmit: (values) => {
      login(values);
      alert("Login successful!");
    },
  });

  return (
    <>
      <NavBar />
      <h2>Log In</h2>
      <div className="login-container">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && <div>{formik.errors.email}</div>}

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password && <div>{formik.errors.password}</div>}

          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
