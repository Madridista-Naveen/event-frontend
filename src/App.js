import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes, Outlet, useNavigate } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import Register from "./Register";
import Dashboard from "./Dashboard";
import LandingPage from "./LandingPage";
import UserLogin from "./UserLogin";
import UserRegistration from "./UserRegistration";
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    // Redirect to /home after login if authenticated and not already on /home
    if (isAuthenticated && !window.location.pathname.includes("/home")) {
      navigate("/home", { replace: true });
    }
  }, [isAuthenticated, navigate]);
  

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/userLogin" element={<UserLogin />} />
      <Route path="/userRegistration" element={<UserRegistration />} />
      <Route path="/home" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="register" element={<Register />} /> {/* Use a relative path */}
        <Route path="dashboard" element={<Dashboard />} /> {/* Use a relative path */}
      </Route>
    </Routes>
  );
}

export default App;