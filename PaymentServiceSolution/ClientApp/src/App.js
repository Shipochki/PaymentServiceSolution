import { useState } from 'react';
import './App.css';
import { AuthContext } from './contexts/AuthContext.js';
import { Header } from './components/Header/Header.js';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Home } from './components/Home/Home.js';
import { Login } from './components/Login/Login.js'
import { LoginCompany } from './components/LoginCompany/LoginCompany.js';
import { LoginUser } from './components/LoginUser/LoginUser.js';
import { Register } from './components/Register/Register.js';
import { RegisterUser } from './components/RegisterUser/RegisterUser.js';
import { RegisterCompany } from './components/RegisterCompany/RegisterCompany.js'

function App() {
  const navigate = useNavigate();

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

      localStorage.setItem('auth');
      const storage = localStorage.getItem('auth');
      storage = result;

      navigate("/");
    } catch (error) {
      console.log("Login problem");
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

      localStorage.setItem('auth');
      const storage = localStorage.getItem('auth');
      storage = result;

      navigate("/");
    } catch (error) {
      console.log("Login problem");
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

      localStorage.setItem('auth');
      const storage = localStorage.getItem('auth');
      storage = result;

      navigate('/');
      
  } catch{
    console.log("RegisterUser problem");
  };
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

    localStorage.setItem('auth');
      const storage = localStorage.getItem('auth');
      storage = result;

    navigate('/');
    
} catch{
  console.log("RegisterUser problem");
};
};

 const onLogout = async () => {
    localStorage.removeItem('auth');
  };

  const contextValues = {
    onLoginCompanySubmit,
    onLoginUserSubmit,
    onRegisterUserSubmit,
    onRegisterCompanySubmit,
    onLogout
  }

 

  return (
    <AuthContext.Provider value={contextValues}>
      <div className="box">
          <Header/>

          <main id='main-content'>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>} />
                <Route path="/loginUser" element={<LoginUser/>}/>
                <Route path="/loginCompany" element={<LoginCompany/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/registerUser' element={<RegisterUser/>}/>
                <Route path='/registerCompany' element={<RegisterCompany/>}/>
            </Routes>
          </main>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
