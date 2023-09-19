    import React from 'react';
    import { useNavigate } from "react-router-dom";
   
    function LandingPage() {

    const navigate = useNavigate();
    const redirectToLogin = () => {
        navigate("/userLogin")
    }

    const redirectToRegister = () => {
        navigate("/userRegistration")
    }
    
    return (
        <div>
        <h1>Welcome to Your App</h1>
        <p>Choose an option:</p>
        <button onClick={redirectToLogin}>Login</button>
        <button onClick={redirectToRegister}>Register</button>
        </div>
    );
    }

    export default LandingPage;
