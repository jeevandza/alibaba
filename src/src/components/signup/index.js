import React from "react";
import validateInfo from "../../validate";
import UseForms from "../../hooks/forms";
import { Form, Button } from "react-bootstrap";
import { BsBriefcase, BsFillShieldLockFill } from "react-icons/bs";
import axios from "axios";


const SignUp = ({ submitForm }) => {
  const { handleSubmit, errors, handleChange, values } = UseForms(
    submitForm,
    validateInfo
  );

// const [email, setEmail] = useState("")
// const [password, setPassword] = useState("")
// const [password, setPassword2] = useState("")

axios.post("",{
  email: values.email,
  password: values.password,
  password2: values.password2
}).then(response => {
  console.log(response)
}).catch(err => {
  console.log(err)
});

  return (
    <div>
      <h1 className="site-name"> Welcome to SHOParound.com</h1>
      <div className="container">
        {/* SIGN IN SECTION */}
        <div className="sign-in">
          <Form onSubmit={handleSubmit} noValidate>
            <div>
              <span className="sign-in-icon"> {<BsBriefcase />}</span>
              <input
                value={values.email}
                onChange={handleChange}
                className={errors.email ? "error signup-form" : "signup-form"}
                type="email"
                name="email"
                id="email"
                placeholder="Enter e-mail"
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <br />
            <div>
              <span className="sign-in-icon">
                <BsFillShieldLockFill />
              </span>
              <input
                value={values.password}
                onChange={handleChange}
                className={
                  errors.password ? "error signup-form" : "signup-form"
                }
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <br />
            <div>
              <span className="sign-in-icon">
                <BsFillShieldLockFill />
              </span>
              <input
                value={values.password2}
                onChange={handleChange}
                className={
                  errors.password2 ? "error signup-form" : "signup-form"
                }
                type="password"
                name="password2"
                id="password2"
                placeholder="Re-Enter Password"
              />
              {errors.password2 && <p className="error">{errors.password2}</p>}
            </div>
            <h3 className="new-to-alibaba">New to Shop around?</h3>
            <Button
              type="submit"
              className="signup-button"
              style={{ fontSize: "11px" }}
            >
              Create your SHOParound account
            </Button>
          </Form>
        </div>
      </div>
      {/* BOTTOM SECTION */}
      <div className="bottom-section">
        <h2>Terms and conditions</h2>
        <h2>Privacy Notice</h2>
        <h2>Help</h2>
      </div>
      <div className="bottom-section">
        <h3>@2021,shoparound.com,Inc. or its affilities</h3>
      </div>
    </div>
  );
};

export default SignUp;
