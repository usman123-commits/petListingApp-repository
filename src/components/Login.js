import React, {useState,useContext} from 'react'
import { useNavigate } from "react-router-dom";
import {NoteContext} from "../context/notes/NoteState";


const Login = () => {
    const Contex = useContext(NoteContext);
  const { setAlert,setEmail } = Contex;
    const [credentials, setCredentials] = useState({email: "", password: ""}) 
    let Navigate = useNavigate();

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
      
        if (json.success){

            setAlert({ type: "success", message: "You are logined successfuly,Welcome to PET-APP" });

            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            setEmail(json.email)
            Navigate("/");
           
           
        }
        else{
            setAlert({ type: "danger", message: "Invalid credentials" });
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div className='container'style={{marginTop:'100px'}}>
            <form >
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>

                <button type="submit" className="btn btn-primary"  onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Login