import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Sidebar from './Sidebar';
import Dashboardhome from './Dashboardhome';
import styled from "styled-components";
import Users from "./Users";
import Userinf from "./Userinf";
import UserAdds from "./UserAdds";


const Parent = styled.div`
  display: grid;
  grid-template-columns:256px 1fr ;
  
`;
const Dashboard = () => {
  return (
    <Parent>
      <div style={{ gridColumn: '1/2' }}>
        <Sidebar />
      </div>

      <main style={{ gridColumn: '2/3' }}>
        <Routes>
          <Route path="Dashboardhome" element={<Dashboardhome />} />
          <Route path="Users" element={<Users />} /> 
          <Route path="Userinf/:id" element={<Userinf />} /> 
          <Route path="UserAdds/:id" element={<UserAdds/>} /> 
        </Routes>
      </main>
    </Parent>

  );
};

export default Dashboard;
