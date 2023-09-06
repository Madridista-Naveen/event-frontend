import React, { useState } from "react";

export default function Register() {

    const[name,setName] = useState('')
    const[year,setYear] = useState('')
    const[mnumber,setMnumber] = useState('')
    const[email,setEmail] = useState('')


    async function register(e) {
        e.preventDefault();

        if (!name || !year || !mnumber || !email) {
          alert('Please fill in all fields');
          return;
        }
        
        const response = await fetch('http://localhost:5000/register',{
        method: 'POST',
        body: JSON.stringify({name,year,mnumber,email}),
        headers:{'Content-Type':'application/json'},
        })

        console.log('Response Status Code:', response.status);

        if (response.status === 201) {
            alert('Registration successful!');
          } else {
            alert('Registration failed!');
          }
          
    }
  
  
    return (
    <div>
      <main className="form-signin w-100 m-auto">
        <form className="form" onSubmit={register}> 
          <h1 className="h3 mb-3 fw-normal">Please Register </h1>
          
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Your name"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
              required
            />
            <label htmlFor="floatingInput">Name</label>
          </div>

          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="floatingInput"
              placeholder="Graduation year"
              value={year}
              onChange={(ev) => setYear(ev.target.value)}
              required
            />
            <label htmlFor="floatingInput">Year of Graduation</label>
          </div>

          <div className="form-floating">
            <input
              type="tel"
              className="form-control"
              id="floatingInput"
              placeholder="Your number"
              value={mnumber}
              onChange={(ev) => setMnumber(ev.target.value)}
              required
            />
            <label htmlFor="floatingInput">Mobile no.</label>
          </div>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              required
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          
          <button className="btn btn-primary w-100 py-2 mt-3" type="submit">
            Register
          </button>
        </form>
      </main>
    </div>
  );
}
