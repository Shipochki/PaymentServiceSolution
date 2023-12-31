import { Link, useNavigate } from "react-router-dom";

import "./header.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const Header = () => {
  const { getProductsByCompanyId, getAllProducts } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <header>
        <div className="div-logo-text" onClick={() => {navigate('/')}}>
      <div className="logo-img" ></div>      
      <p className="name-site">Literaty Lights</p>    
        </div>

        
      <nav>
        <div className="log-sign-btns">
          <button className="catalog-btn" onClick={() => {
                getAllProducts()
              }}>
                Catalog
              </button>
          <Link className="about-us-btn" to={"/aboutus"}>About Us</Link>
          {localStorage.getItem("id") && (
            <div className="div-btns">
              
              <Link className="logout-btn" to={"/logout"}>
                Logout
              </Link>
              {localStorage.isCompany == "true" && (
                 <div className="dropdown">
                 <button className="dropbtn drop-login">Tools</button>
                 <div className="dropdown-content">
                   <Link className="addProduct-btn" to={"/addProduct"}>
                    Add Product
                   </Link>
                   <Link
                    onClick={() => {
                      getProductsByCompanyId();
                    }}
                  >
                    My Products
                  </Link>
                </div>
                 </div> 
              )}
            </div>
          )}

          {!localStorage.getItem("id") && (
            <div>
              <div className="dropdown">
                <button className="dropbtn drop-login">Sign in</button>
                <div className="dropdown-content">
                  <Link className="login-btn" to={"/loginUser"}>
                    Client
                  </Link>
                  <Link className="login-btn" to={"/loginCompany"}>
                    Company
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
