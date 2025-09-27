import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {NoteContext} from "../context/notes/NoteState";

const Changepass = () => {
  const Contex = useContext(NoteContext);
  const { setAlert ,email } = Contex;
  const [credentials, setCredentials] = useState({ password: "", cpassword:"" });
  let Navigate = useNavigate();
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // HANDLE SUBMIT
  const handleSubmit = async(e) => {
    e.preventDefault();
    
    if (credentials.password !== credentials.cpassword) {
        setAlert({ type: "danger", message: "Your password doesnot match please confirm the password" })
      }
      e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/changepass", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token":localStorage.getItem('token')
            },
            body: JSON.stringify({email:email, password: credentials.password})
        });
        const json = await response.json()
      
        if (json.success){

            setAlert({ type: "success", message: "your password is changed" })
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            Navigate("/");
        }
        else{
          setAlert({ type: "danger", message: "Invalid credentials" })
        }
  };
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={email}
            placeholder={email}
            onChange={onChange}
            id="email"
            name="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={credentials.password}
            onChange={onChange}
            name="password"
            id="password"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
           Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            value={credentials.cpassword}
            onChange={onChange}
            name="cpassword"
            id="cpassword"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
         Change password
        </button>
      </form>
    </div>
  );
};

export default Changepass;
