import "./App.css";
import { AuthContext } from "./contexts/AuthContext.js";
import { Header } from "./components/Header/Header.js";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./components/Home/Home.js";
import { LoginCompany } from "./components/LoginCompany/LoginCompany.js";
import { LoginUser } from "./components/LoginUser/LoginUser.js";
import { RegisterUser } from "./components/RegisterUser/RegisterUser.js";
import { RegisterCompany } from "./components/RegisterCompany/RegisterCompany.js";
import { Footer } from "./components/Footer/Footer";
import { Logout } from "./components/Logout/Logout";
import { AddProduct } from "./components/AddProduct/AddProduct";
import { MyProducts } from "./components/MyProducts/MyProducts";
import { useEffect, useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";

function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const onLoginCompanySubmit = async (loginFormKeys) => {
    try {
      const response = await fetch(`/api/company/login`, {
        method: "POST", // GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors,cors, same-origin
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginFormKeys),
      });

      const result = await response.json();

      localStorage.setItem("id", result.id);
      localStorage.setItem("isCompany", result.isCompany);

      getProductsByCompanyId();
    } catch (error) {
      console.log("Login company problem");
    }
  };

  const onLoginUserSubmit = async (loginFormKeys) => {
    try {
      const response = await fetch(`/api/user/login`, {
        method: "POST", // GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors,cors, same-origin
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginFormKeys),
      });

      const result = await response.json();

      console.log(result);

      localStorage.setItem("id", result.id);
      localStorage.setItem("isCompany", result.isCompany);

      navigate("/");
    } catch (error) {
      console.log("Login user problem");
    }
  };

  const onRegisterUserSubmit = async (registerFormKeys) => {
    const { confirmPassword, ...registerData } = registerFormKeys;
    if (confirmPassword !== registerData.password) {
      return;
    }

    try {
      const response = await fetch(`/api/user/register`, {
        method: "POST", // GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors,cors, same-origin
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerFormKeys),
      });

      const result = await response.json();

      localStorage.setItem("id", result.id);
      localStorage.setItem("isCompany", result.isCompany);

      navigate("/");
    } catch {
      console.log("RegisterUser problem");
    }
  };

  const onRegisterCompanySubmit = async (registerFormKeys) => {
    const { confirmPassword, ...registerData } = registerFormKeys;
    if (confirmPassword !== registerData.password) {
      return;
    }

    try {
      const response = await fetch(`/api/company/register`, {
        method: "POST", // GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors,cors, same-origin
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerFormKeys),
      });

      const result = await response.json();

      localStorage.setItem("id", result.id);
      localStorage.setItem("isCompany", result.isCompany);

      getProductsByCompanyId();
    } catch {
      console.log("RegisterUser problem");
    }
  };

  const onLogout = async () => {
    localStorage.clear();
  };

  const onAddProductSubmit = async (addProductFromKeys) => {
    try {
      await fetch(`/api/product/addProduct`, {
        method: "POST", // GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors,cors, same-origin
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addProductFromKeys),
      });
    } catch {
      console.log("Problem with add product");
    }

    getProductsByCompanyId();
  };

  const getProductsByCompanyId = async () => {
    try {
      const companyId = localStorage.id;

      const response = await fetch(
        `/api/product/GetProductsByCompanyId/${companyId}`,
        {
          method: "GET", // GET, POST, PUT, DELETE, etc.
          //body: JSON.stringify(companyId),
        }
      );

      const result = await response.json();

      setProducts(result);

      navigate("/myProducts");
    } catch {
      console.log("Problem get products by company id");
    }
  };

  const getAllProducts = async () => {
    try {
      const response = await fetch(
      `/api/product/GetAll`,
      {
        method:"GET",
      }
    );

    const result = await response.json();

    setAllProducts(result);
    } catch (error) {
      console.log("Problem with get all")
    }
    
  }

  const createSesison = async (productFormKeys) => {
    try {
      await fetch(`/api/Checkout/Create`, {
      method:"POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productFormKeys),
    })
    } catch (error) {
      console.log("problem")
    }
    
  }

  useEffect(() => {
    getAllProducts();

    if (localStorage.isCompany == "true") {
      getProductsByCompanyId();
    }
  }, []);

  const contextValues = {
    onLoginCompanySubmit,
    onLoginUserSubmit,
    onRegisterUserSubmit,
    onRegisterCompanySubmit,
    onLogout,
    onAddProductSubmit,
    getProductsByCompanyId,
    createSesison
  };

  return (
    <AuthContext.Provider value={contextValues}>
      <div className="box">
        <Header />

        <main id="main-content">
          <Routes>
            {localStorage.isCompany == "true" && (
              <Route path="/" element={<MyProducts products={products} />} />
            )}
            <Route path="/" element={<Home allProducts={allProducts}/>} />
            <Route path="/loginUser" element={<LoginUser />} />
            <Route path="/loginCompany" element={<LoginCompany />} />
            <Route path="/registerUser" element={<RegisterUser />} />
            <Route path="/registerCompany" element={<RegisterCompany />} />
            <Route path="/logout" element={<Logout />} />
            {localStorage.isCompany == "true" && (
              <Route path="/addProduct" element={<AddProduct />} />
            )}
            {localStorage.isCompany == "true" && (
              <Route
                path="/myProducts"
                element={<MyProducts products={products} />}
              />
            )}
          </Routes>
        </main>

        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
