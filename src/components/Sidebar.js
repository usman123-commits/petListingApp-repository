import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import users from "../images/users.png";
import adds from "../images/adds.png";
import analytics from "../images/analytics.png";
import settings from "../images/settings.png";
import logout from "../images/logout.png";
import dashboard from "../images/dashboard.png";
import "../styles/Sidebar.css";


const Sidebar = () => {
    let Navigate = useNavigate();
    const [activeLink, setActiveLink] = useState(null); // State to track the active link

    const handleLinkClick = (index) => {
        setActiveLink(index); // Update active link
    };
    return (
        <div className="sidebar">
            <div className="nav">
                <div className="ul">
                    {/* FOR Dashboard */}
                    <Link className="li" style={{ backgroundColor: activeLink === 1 ? '#EFF2FF' : '' }} to='/dashboard/dashboardHome' onClick={() => { handleLinkClick(1) }}>
                        <img className="img" alt="I" src={dashboard} />

                        <div className="span">
                            <div className="text-wrapper">Dashboard</div>
                        </div>
                    </Link>
                    {/* FOR Users */}
                    <Link className="li-1" to='/dashboard/Users' onClick={() => { handleLinkClick(2) }} style={{ backgroundColor: activeLink === 2 ? '#EFF2FF' : '' }}>
                        <img className="frame-2" alt="Frame" src={users} />

                        <div className="text-wrapper-2">Users</div>
                    </Link>
                    {/* FOR ADDS */}
                    <Link className="li-2" onClick={() => { handleLinkClick(3) }} style={{ backgroundColor: activeLink === 3 ? '#EFF2FF' : '' }}>
                        <img className="img" alt="Frame" src={adds} />

                        <div className="text-wrapper-3">Ads</div>
                    </Link>
                    {/* FOR Analytics */}
                    <Link className="li-3" onClick={() => { handleLinkClick(4) }} style={{ backgroundColor: activeLink === 4 ? '#EFF2FF' : '' }}>
                        <img className="img" alt="Frame" src={analytics} />

                        <div className="text-wrapper-4">Analytics</div>
                    </Link>
                    {/* FOR Settings */}
                    <Link className="li-4" onClick={() => { handleLinkClick(5) }} style={{ backgroundColor: activeLink === 5 ? '#EFF2FF' : '' }}>
                        <img className="img" alt="Frame" src={settings} />

                        <div className="text-wrapper-5">Settings</div>
                    </Link>

                    <div className="li-5">
                        <img className="img" alt="Frame" src={logout} />

                        <div className="text-wrapper-6" onClick={() => { Navigate("/") }}>Logout</div>
                    </div>
                </div>
            </div>

            <div className="div-wrapper">
                <div className="text-wrapper-7">Admin Dashboard</div>
            </div>
        </div>
    )
}

export default Sidebar

