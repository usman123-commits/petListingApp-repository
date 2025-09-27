import React from 'react'
import girlimg from "../images/girlimg.png";
import bellicon from "../images/belicon.png";
import search from "../images/search.png";
import adds2 from "../images/adds2.png";
import users2 from "../images/users2.png";
import activeUsers from "../images/activeUsers.png";
import report from "../images/report.png";
import actions from "../images/actions.png";
import action2 from "../images/action2.png";

 
import "../styles/Dashboardhome.css";


const Dashboardhome = () => {
  return (
    <div className="dashboard-body">
      <div className="dashboard-container">
        <header className="header">
          <div className="search-bar">
            <div className="div-wrapper">
              <div className="search-input-container">
                <div className="search-input-wrapper">
                  <input className="search-input" placeholder="Search..." type="text" />
                  <img className="search-icon" alt="search-icon" src={search} />
                </div>
              </div>
            </div>

            <div className="class-2">
            <img className="img" alt="bellicon" src={bellicon} style={{height:'30px',width:'30px'}}/>
              <img className="img-2" src={girlimg} />

            </div>
          </div>
        </header>
          
        <div className="dashboard-content">
  
          <div className="stats-container">
           {/* Total Ads */}
            <div className="div-wrapper-3">
              <div className="class-5">
                <div className="class-7">
                  <div className="text-wrapper-3">Total Ads</div>
                  <div className="text-wrapper-4">12,545</div>
                </div>
                <img className="frame-3" alt="Frame" src={adds2} />
              </div>
            </div>
           {/* Total USERS */}

            <div className="div-wrapper-3">
              <div className="class-5">
                <div className="class-7">
                  <div className="text-wrapper-3">Total Users</div>
                  <div className="text-wrapper-4">12,545</div>
                </div>
                <img className="frame-3" alt="Frame" src={users2} />
              </div>
            </div>
           {/* ACTIVE  users*/}

            <div className="div-wrapper-3">
              <div className="class-5">
                <div className="class-7">
                  <div className="text-wrapper-3">Active Users</div>
                  <div className="text-wrapper-4">12,545</div>
                </div>
                <img className="frame-3" alt="Frame" src={activeUsers} />
              </div>
            </div>
           {/* REPORTED ADDS*/}

            <div className="div-wrapper-3">
              <div className="class-5">
                <div className="class-7">
                  <div className="text-wrapper-3">Reported Ads</div>
                  <div className="text-wrapper-4">12,545</div>
                </div>
                <img className="frame-3" alt="Frame" src={report} />
              </div>
            </div>
          </div>
{/* class-10 */}
          <div className="recent-activity">
            <div className="recent-user">
              <div className="div-wrapper-6">
                <div className="section-header">Recent Users</div>
              </div>

              <div className="table-wrapper">
                <div className="table">
                  <div className="thead">
                    <div className="tr">
                      <div className="th">
                        <div className="text-wrapper-10">Name</div>
                      </div>

                      <div className="th-2">
                        <div className="text-wrapper-10">Email</div>
                      </div>

                      <div className="th-3">
                        <div className="text-wrapper-10">Status</div>
                      </div>

                      <div className="th-4">
                        <div className="text-wrapper-10">Actions</div>
                      </div>
                    </div>
                  </div>

                  <div className="tbody">
                    <div className="tr-2">
                      <div className="td">
                        <div className="text-wrapper-14">John Smith</div>
                      </div>

                      <div className="td-2">
                      <div className="text-wrapper-14">john@example.com</div>
                      </div>

                      <div className="span-wrapper">
                        <div className="span-2">
                          <div className="text-wrapper-16">Active</div>
                        </div>
                      </div>

                      <img className="td-3" alt="Td" src={actions} />
                    </div>
                    <div className="tr-2">
                      <div className="td">
                        <div className="text-wrapper-14">John Smith</div>
                      </div>

                      <div className="td-2">
                      <div className="text-wrapper-14">john@example.com</div>
                      </div>

                      <div className="span-wrapper">
                        <div className="span-2">
                          <div className="text-wrapper-16">Active</div>
                        </div>
                      </div>

                      <img className="td-3" alt="Td" src={actions} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
          <div className="recent-activity" style={{top:'390px'}}>
            <div className="recent-user">
              <div className="div-wrapper-6">
                <div className="section-header">Recent Users</div>
              </div>

              <div className="table-wrapper">
                <div className="table">
                  <div className="thead">
                    <div className="tr">
                      <div className="th">
                        <div className="text-wrapper-10">Name</div>
                      </div>

                      <div className="th-2">
                        <div className="text-wrapper-10">Email</div>
                      </div>

                      <div className="th-3">
                        <div className="text-wrapper-10">Status</div>
                      </div>

                      <div className="th-4">
                        <div className="text-wrapper-10">Actions</div>
                      </div>
                    </div>
                  </div>

                  <div className="tbody">
                    <div className="tr-2">
                      <div className="td">
                        <div className="text-wrapper-14">John Smith</div>
                      </div>

                      <div className="td-2">
                      <div className="text-wrapper-14">john@example.com</div>
                      </div>

                      <div className="span-wrapper">
                        <div className="span-2">
                          <div className="text-wrapper-16">Active</div>
                        </div>
                      </div>

                      <img className="td-3" alt="Td" src={actions} />
                    </div>
                    <div className="tr-2">
                      <div className="td">
                        <div className="text-wrapper-14">John Smith</div>
                      </div>

                      <div className="td-2">
                      <div className="text-wrapper-14">john@example.com</div>
                      </div>

                      <div className="span-wrapper">
                        <div className="span-2">
                          <div className="text-wrapper-16">Active</div>
                        </div>
                      </div>

                      <img className="td-3" alt="Td" src={actions} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
      {/* <button className='Animatedbtn'> hello</button> */}
    </div>
    
  )
}

export default Dashboardhome
