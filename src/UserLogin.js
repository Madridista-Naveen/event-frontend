    import React, { useState } from "react";
    import { Navigate } from "react-router-dom";

    export default function UserLogin() {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [redirect, setRedirect] = useState(false);

        async function login(e) {
            e.preventDefault();
            const response = await fetch('http://localhost:5000/userLogin', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include',  
            });
        
            if (response.ok) {
            setRedirect(true);
            alert('Login successful')
            } else {
            alert("Wrong credentials");
            }
        } 

        if (redirect) {
            return <Navigate to="/home" />;
        }

        return (
            <div>
            <form className="login" onSubmit={login}>
                <h1> Login </h1>
                <input
                type="text"
                placeholder="username"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                />
                <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                />
                <button> Login </button>
            </form>
            </div>
        );
    }