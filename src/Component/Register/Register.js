import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../AuthContext/AuthContext";
import NavBar from "../Nav/Nav";
import "./Register.css";

const Register = () => {
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Password should be 6 chars minimum")
        .required("Required"),
      name: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      login(values);
      alert("Registration successful!");
    },
  });

  return (
    <>
      <NavBar />
      <h2>Sign Up</h2>
      <div className="register-container">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name && <div>{formik.errors.name}</div>}

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

          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
