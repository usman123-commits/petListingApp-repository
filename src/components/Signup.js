import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {NoteContext} from "../context/notes/NoteState";
const Signup = () => {
  const Contex = useContext(NoteContext);
  const { setAlert,setEmail } = Contex;
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    if (credentials.password !== credentials.cpassword) {
      setAlert("danger,Your password doesnot match please confirm the password");
    } else {
      const response = await fetch(
        "http://localhost:5000/api/auth/createuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: credentials.name,
            email: credentials.email,
            password: credentials.password,
          }),
        }
      );
      const json = await response.json();

      if (json.success) {
        setAlert({ type: "success", message: "Sign up was completed,Welcome to the PET-APP" });

        // Save the auth token and redirect
        localStorage.setItem("token", json.authtoken);
        setEmail(json.email)
        Navigate("/");
      } else {
        json.errors && setAlert({ type: "danger", message: `${json.errors[0].msg}` });
        

      }
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className='container'>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            value={credentials.name}
            onChange={onChange}
            name="name"
            id="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={credentials.email}
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
          <label htmlFor="cpassword" className="form-label">
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
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;
