import React, { useContext, useRef } from 'react'
import girlimg from "../images/girlimg.png";
import bellicon from "../images/belicon.png";
import search from "../images/search.png";
import actions from "../images/actions.png";
import UserResults from './UserResults';

import "../styles/Dashboardhome.css";
import { DashboardContext } from '../context/notes/DashboardState';

const Users = () => {
  const context =useContext(DashboardContext);
  const{regexSearch,results}=context;
  const ref =useRef();
  const handleSearch=(e)=>{
    e.preventDefault();
    regexSearch(ref.current.value)
    ref.current.value=null;

  }
  return (
    <div className="dashboard-body">
      <div className="dashboard-container">
        <header className="header">
          <div className="search-bar">
            <div className="div-wrapper">
              <div className="search-input-container">
                <div className="search-input-wrapper">
                  <input className="search-input" placeholder="Search by ID, Username, Email..." type="text" ref={ref}/>
                  <img className="search-icon" alt="search-icon" src={search} onClick={handleSearch}/>
                </div>
              </div>
            </div>

            <div className="class-2">
              <img className="img" alt="bellicon" src={bellicon} style={{ height: '30px', width: '30px' }} />
              <img className="img-2" src={girlimg} />

            </div>
          </div>
        </header>
        <div className="users">
          <div className="headings" >
            <div style={{ gridColumn: '1/2', fontWeight: '700', marginLeft: '20px' }}>Name</div>
            <div style={{ gridColumn: '2/3', fontWeight: '700' }}>Email</div>
            <div style={{ gridColumn: '3/4', fontWeight: '700' }}>Status</div>
            <div style={{ gridColumn: '4/5', fontWeight: '700' }}>ID</div>
           
          </div>
          {results.map((result)=>{return <UserResults key={result._id} result={result}/>})}

        </div>

      </div>

    </div>

  )
}

export default Users
