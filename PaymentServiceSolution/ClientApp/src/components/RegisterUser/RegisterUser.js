import { useContext } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";
import "./registerUser.css"

const RegisterFormKeys = {
  Firstname: "firstname",
  Lastname: "lastname",
  Email: "email",
  Password: "password",
  confirmPassword: "confirmpassword",
};

export const RegisterUser = () => {
  const { onRegisterUserSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm(
    {
      [RegisterFormKeys.Firstname]: "",
      [RegisterFormKeys.Lastname]: "",
      [RegisterFormKeys.Email]: "",
      [RegisterFormKeys.Password]: "",
      [RegisterFormKeys.confirmPassword]: "",
    },
    onRegisterUserSubmit
  );

  return (
    // <section id="register-page" className="content auth">
    //     <form id="register" method="post" onSubmit={onSubmit}>
    //         <div className="container">
    //             <div className="brand-logo"></div>
    //             <h1>Register Client</h1>

    //             <label htmlFor="text">FirstName:</label>
    //             <input
    //                 type="text"
    //                 id="firstname"
    //                 name={RegisterFormKeys.Firstname}
    //                 placeholder="Nicola"
    //                 value={values[RegisterFormKeys.Firstname]}
    //                 onChange={changeHandler}
    //             />

    //             <label htmlFor="text">LastName:</label>
    //             <input
    //                 type="text"
    //                 id="lastname"
    //                 name={RegisterFormKeys.Lastname}
    //                 placeholder="Petrov"
    //                 value={values[RegisterFormKeys.Lastname]}
    //                 onChange={changeHandler}
    //             />

    //             <label htmlFor="email">Email:</label>
    //             <input
    //                 type="email"
    //                 id="email"
    //                 name="email"
    //                 placeholder="maria@email.com"
    //                 value={values.email}
    //                 onChange={changeHandler}
    //             />

    //             <label htmlFor="pass">Password:</label>
    //             <input
    //                 type="password"
    //                 name="password"
    //                 id="register-password"
    //                 value={values.password}
    //                 onChange={changeHandler}
    //             />

    //             <label htmlFor="con-pass">Confirm Password:</label>
    //             <input
    //                 type="password"
    //                 name="confirmPassword"
    //                 id="confirm-password"
    //                 value={values.confirmPassword}
    //                 onChange={changeHandler}
    //             />

    //             <input className="btn submit" type="submit" value="Register" />

    //             <p className="field">
    //                 <span>If you already have profile click <Link to="/loginUser">here</Link></span>
    //             </p>
    //         </div>
    //     </form>
    // </section>

    <section className="body-register">
      <div class="container">
        <div class="title">Registration Client</div>
        <div class="content">
          <form id="register" method="post" onSubmit={onSubmit}>
            <div class="user-details">
              <div class="input-box">
                <label htmlFor="text" class="details">
                  FirstName
                </label>
                <input
                  type="text"
                  id="firstname"
                  name={RegisterFormKeys.Firstname}
                  placeholder="Enter your FirstName"
                  value={values[RegisterFormKeys.Firstname]}
                  onChange={changeHandler}
                />
              </div>
              <div class="input-box">
                <label htmlFor="text" class="details">
                  LastName
                </label>
                <input
                  type="text"
                  id="lasttname"
                  name={RegisterFormKeys.Lastname}
                  placeholder="Enter your LastName"
                  value={values[RegisterFormKeys.Lastname]}
                  onChange={changeHandler}
                />
              </div>
              <div class="input-box">
                <label htmlFor="email" class="details">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={changeHandler}
                  placeholder="Enter your Email"
                  required
                />
              </div>
              <div class="input-box">
                <label htmlFor="pass" class="details">
                  Password
                </label>
                <input
                  type="passowrd"
                  name="password"
                  id="register-password"
                  value={values.password}
                  onChange={changeHandler}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div class="input-box">
                <label htmlFor="con-pass" class="details">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirm-password"
                  value={values.confirmPassword}
                  onChange={changeHandler}
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>
            <div class="button">
              <input type="submit" value="Register" />
            </div>
            <p className="field">
              <span>
                If you already have profile click{" "}
                <Link to="/loginUser">here</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
