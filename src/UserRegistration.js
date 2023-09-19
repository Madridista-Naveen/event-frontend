import React, { useState } from "react";

export default function UserRegistration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  async function register(e) {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/userRegister', {
      method: 'POST',
      body: JSON.stringify({name,email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.status === 200) {
      alert('Registration successful!');
    } else {
      try {
        const data = await response.json(); // Attempt to parse error response
        alert(data.message || 'Registration failed'); // Display error message
      } catch (error) {
        // Handle error if response cannot be parsed as JSON
        alert('Registration failed');
      }
    }
  }
  return (
    <div>
      <form className="register" onSubmit={register}>
        <h1>Register</h1>
        <input type="text" placeholder="name" value={name} onChange={e => setName(e.target.value)}/>
 
        <input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button>Register</button>
      </form>
    </div>
  );
}
