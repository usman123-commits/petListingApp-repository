import React from 'react'
import "../styles/UserResults.css";
import active from "../images/active.png";
import { Link, useLocation } from "react-router-dom";
import Userinf from './Userinf';

const UserResults = (props) => {
  const { result } = props
  return (
    <div className="results" >
      <Link to={`/dashboard/UserInf/${result._id}`}><div style={{ gridColumn: '1/2', fontWeight: '100', marginLeft: '20px' }}>{result.name}</div></Link>
      
      <div style={{ gridColumn: '2/3', fontWeight: '100' }}>{result.email}</div>
      <div style={{ gridColumn: '3/4' }}>
        <img src={active} alt="active" style={{ width: '40px', height: '14px' }} />
      </div>
      <div style={{ gridColumn: '4/5', fontWeight: '100' }}>{result._id}</div>
      
    
    </div>
  )
}

export default UserResults
