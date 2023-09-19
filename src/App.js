// App.js
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import Register from "./Register";
import Dashboard from "./Dashboard";
import LandingPage from "./LandingPage";
import UserLogin from "./UserLogin";
import UserRegistration from "./UserRegistration";

function App() {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/userLogin" element={<UserLogin/>} />
      <Route path="/userRegistration" element={<UserRegistration/>} />
        <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      
    </Routes>
  );
}
export default App;
