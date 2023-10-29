import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import "./loginCompany.css";

const LoginFormKeys = {
  Email: "email",
  Password: "password",
};

export const LoginCompany = () => {
  const { onLoginCompanySubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm(
    {
      [LoginFormKeys.Email]: "",
      [LoginFormKeys.Password]: "",
    },
    onLoginCompanySubmit
  );

  return (
    <section>
      <div className=".body-login">
        <div className="center">
          <div className="container-login">
            <div className="text">Login Company</div>
            <form id="login" method="POST" onSubmit={onSubmit}>
              <div>
                <div className="data">
                  <label>Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter company email"
                    name={LoginFormKeys.Email}
                    value={values[LoginFormKeys.Email]}
                    onChange={changeHandler}
                    required
                  />
                </div>
                <div className="data">
                  <label>Password</label>
                  <input
                    type="password"
                    id="login-password"
                    name={LoginFormKeys.Password}
                    value={values[LoginFormKeys.Password]}
                    onChange={changeHandler}
                  />
                </div>
                <div className="btn">
                  <input type="submit" className="inner" value="LOGIN" />
                </div>
                
                <div className="signup-link">
                  Not a client <Link to="/registerCompany">Signup now</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
