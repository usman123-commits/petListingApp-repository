import React, { useContext, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {NoteContext} from "../context/notes/NoteState";

const Navbar = () => {
  const context = useContext(NoteContext);
  const { search, loginWithGoogle,checkingStatus,loginStatus,logoutFun } = context;
  let Navigate = useNavigate();
  let localRef = useRef(null);
  let location = useLocation();
  
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/api/auth/google";
    
  };
  
  const Navbarfun = () => {
    if (location.pathname === "/dashboard") {
      return "d-none";
    }
    else if (location.pathname === "/dashboard/dashboardHome") {
      return "d-none";
    }
    else if (location.pathname === "/dashboard/Users") {
      return "d-none";
    }
    else if (location.pathname.startsWith("/dashboard/UserInf/")) {
      return "d-none";
    }
    else if (location.pathname.startsWith("/dashboard/UserAdds/")) {
      return "d-none";
    }
  };
  useEffect(()=>{
  checkingStatus();
  
  },[])

  return (
    <nav
      className={`navbar navbar-expand-lg  ${Navbarfun()}`}
      style={{
        position: "sticky",
        top: "0",
        zIndex: "1000",
        width: "100%",
        marginBottom: "30px",
        boxShadow: "10px 10px 15px 0px rgba(0, 0, 0, 0.5)",
        background: 'linear-gradient(135deg, rgb(27, 147, 174), rgb(72, 2, 61))'
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/" ? "active" : ""
                  }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/about" ? "active" : ""
                  }`}
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/sell" ? "active" : ""
                  }`}
                to="/sell"
              >
                Sell
              </Link>
            </li>
            <Link
              className={`nav-link ${location.pathname === "/myadds" ? "active" : ""
                }`}
              aria-current="page"
              to="/myadds"
            >
              My Adds
            </Link>
            <Link
              className={`nav-link ${location.pathname === "/fav" ? "active" : ""
                }`}
              aria-current="page"
              to="/fav"
            >
              Favourites
            </Link>
            <Link
              className={`nav-link ${location.pathname === "/dashboard" ? "active" : ""
                }`}
              aria-current="page"
              to="/dashboard"
            >
              Dashboard
            </Link>
          </ul>
          {/* SEARCHING  */}
          <form className="d-flex mx-2 my-2" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search "
              aria-label="Search"
              ref={localRef}
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                search(localRef.current.value);
                localRef.current.value = null;
                Navigate("/");
              }}
            >
              Search
            </button>
            {/* DROPDOWN FOR CITY */}
            {/* <select
              className="form-select"
              aria-label="Default select example"
              name="city"
              // onChange={onChange}
            >
              <option defaultValue>SELECT CATEGORY OF YOUR PET</option>
              <option value="LAHORE">LAHORE</option>
              <option value="ISLAMABAD">ISLAMABAD</option>
            </select> */}
          </form>
          {!loginStatus ? (
            <form className="d-flex">
              <button className="btn btn-primary mx-1" role="button"
                onClick={
                  (e)=>{
                    e.preventDefault()
                    handleGoogleLogin();
                   
                  }
                }
              >Login</button>
            </form>
          ) : (
            <button onClick={logoutFun} className="btn btn-primary mx-1">
              Logout
            </button>
          )}
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
