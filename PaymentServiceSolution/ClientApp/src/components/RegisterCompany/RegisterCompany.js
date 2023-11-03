import { useContext } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";
import "./registerCompany.css";

const RegisterFormKeys = {
  Name: "name",
  Email: "email",
  Password: "password",
  confirmPassword: "confirmpassword",
};

export const RegisterCompany = () => {
  const { onRegisterCompanySubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm(
    {
      [RegisterFormKeys.Name]: "",
      [RegisterFormKeys.Email]: "",
      [RegisterFormKeys.Password]: "",
      [RegisterFormKeys.confirmPassword]: "",
    },
    onRegisterCompanySubmit
  );

  return (
    <section className="body-register-comp">
      <div class="container">
        <div class="title">Registration Company</div>
        <div class="content">
          <form id="register" method="post" onSubmit={onSubmit}>
            <div class="user-details">
              <div class="input-box">
                <label htmlFor="text" class="details">Name</label>
                <input
                  type="text"
                  id="name"
                  name={RegisterFormKeys.Name}
                  value={values[RegisterFormKeys.Name]}
                  onChange={changeHandler}
                  placeholder="Enter company name"
                  required
                />
              </div>
              <div class="input-box">
                <label htmlFor="email" class="details">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={changeHandler}
                  placeholder="Enter company email"
                  required
                />
              </div>
              <div class="input-box">
                <label htmlFor="pass" class="details">Password</label>
                <input
                  type="passowrd"
                  name="password"
                  id="register-password"
                  value={values.password}
                  onChange={changeHandler}
                  placeholder="Enter password"
                  required
                />
              </div>
              <div class="input-box">
                <label htmlFor="con-pass" class="details">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirm-password"
                  value={values.confirmPassword}
                  onChange={changeHandler}
                  placeholder="Confirm password"
                  required
                />
              </div>
            </div>
            <div class="button">
              <input type="submit" value="Register" />
            </div>
            <p className="field">
                    <span>If you already have profile click <Link to="/loginCompany">here</Link></span>
               </p>
          </form>
        </div>
      </div>
    </section>
  );
};
