import React, { useContext, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
import users2 from "../images/users2.png";
import { useParams } from "react-router-dom";

import "../styles/Userinf.css";
import { DashboardContext } from '../context/notes/DashboardState';

const Userinf = () => {
    const context = useContext(DashboardContext)
    let {id}=useParams();
    // let location =useLocation();

    const { results2 ,regexSearchUser} = context
    useEffect(()=>{
        regexSearchUser(id)
    },[])
    return (<div > 
        {results2[0]? <div style={{ marginTop: '50px' }}>
            <div className='outercontainer'>
                <div className="containerInf">
                    <img src={users2} alt="users2" style={{ height: '100px', width: '100px', marginTop: '15px', marginLeft: '13px' }} />
                </div>
            </div>
            <div className="details" >
                <div className="row" style={{ gridRow: '1/2', display: 'grid', gridTemplateColumns: '10px 1fr 1fr 10px' }}>
                    <div className="col1" >
                        <h5>Name</h5>
                        <h5>{results2[0].name}</h5>
                    </div>
                    <div className="col2">
                        <h5>Email</h5>
                        <h5>{results2[0].email}</h5>
                    </div>
                </div>
                <div className="row" style={{ height: '50px', display: 'grid', gridTemplateColumns: '10px 1fr 1fr 10px' }}>
                    <div className="col1" >
                        <h5>Joining date</h5>
                        <h5>{results2[0].date}</h5>
                    </div>
                    <div className="col2">
                        <h5>Adds posted</h5>
                        <h5>25</h5>
                    </div>
                </div>
                <div className="row" style={{ height: '50px', display: 'grid', gridTemplateColumns: '10px 1fr 1fr 10px' }}>
                    <div className="col1" >
                        <h5>Phone number</h5>
                        <h5>{results2[0].phoneNum}</h5>

                    </div>
                    <div className="col2">
                        <h5>Role</h5>
                        <h5>{results2[0].role}</h5>
                        
                    </div>
                </div>
                <div className="row" style={{ height: '50px', display: 'grid', gridTemplateColumns: '10px 1fr 1fr 10px' }}>
                    <div className="col1" >
                        <h5>Status</h5>
                        <h5>{results2[0].status}</h5>
                    </div>
                    <div className="col2">
                        <h5>Location</h5>
                        <h5>{results2[0].location}</h5>
                    </div>
                </div>
                <div className="row" style={{ height: '50px', display: 'grid', gridTemplateColumns: '10px 1fr 1fr 10px' }}>
                    <div className="col1" >
                      <Link to={`/dashboard/UserAdds/${id}`}> <button className='buttons'  >View Adds</button></Link>
                       <button className='buttons'>Block</button>
                    </div>
                   
                </div>
            </div>
        </div>: <div className=""></div>}
      
        </div>
       
    )
}

export default Userinf
