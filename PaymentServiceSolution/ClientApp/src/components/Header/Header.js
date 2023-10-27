import { Link } from "react-router-dom";

import "./header.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const Header = () => {
    const { getProductsByCompanyId } = useContext(AuthContext)
  return (
    <header>
      <h1>
        <Link className="home" to={"/"}>
          PSS
        </Link>
      </h1>
      <nav>
        <div className="log-sign-btns">
          {localStorage.getItem("id") && (
            <div>
              <Link className="logout-btn" to={"/logout"}>
                Logout
              </Link>
              {localStorage.isCompany == 'true' && (
                <div>
                <Link className="addProduct-btn" to={"/addProduct"}>
                Add Product
              </Link>
              <Link className="myProducts" onClick={() => {
                getProductsByCompanyId();
              }}>My Products</Link>
              </div>
              )}
            </div>
          )}

          {!localStorage.getItem("id") && (
            <div>
              <Link className="login-btn" to={"/login"}>
                Login
              </Link>
              <Link className="register-btn" to={"/register"}>
                Register
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
