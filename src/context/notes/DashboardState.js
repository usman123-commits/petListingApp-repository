import React, { createContext, useState } from 'react';

 export const DashboardContext = createContext();


 export const DashboardContextProvider = (props) => {
  const host = "http://localhost:5000";
  const [adds, setAdds] = useState([])
  const [results, setResults] = useState([])
  const [results2, setResults2] = useState([])
  const [allAdds, setAllAdds] = useState([])
  // ============================
  // 📋 SEARCH BY ID
  // ============================
  const getById = async (id) => {
    try {
      const response = await fetch(`${host}/api/dashboard/searchingId`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (response.ok) {
        const json = await response.json();
        setAdds(json);
      }
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };


    // ============================
  // 📋 SEARCH BY Tag
  // ============================
  const getByTag = async (tag) => {
    try {
      const response = await fetch(`${host}/api/dashboard/searchingTag`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tag }),
      });
      if (response.ok) {
        const json = await response.json();
        setAdds(json);
      }
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };
      // ============================
  // 📋 SEARCH BY Username
  // ============================
  const getByUser = async (user) => {
    try {
      const response = await fetch(`${host}/api/dashboard/searchingUser`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user }),
      });
      if (response.ok) {
        const json = await response.json();
        setAdds(json);
      }
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };


       // ============================
  // 📋 DELETING ADD
  // ============================
  const delAdd = async (id) => {
    try {
      const response = await fetch(`${host}/api/dashboard/deletingAdds`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (response.ok) {
        const json = await response.json();
        setAdds((prevData)=> prevData.filter((add)=>{return add._id!==id}));
      }
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };


       // ============================
  // 📋 SEARCHING BY REGEX
  // ============================
  const regexSearch = async (query) => {
    try {
      const response = await fetch(`${host}/api/dashboard/searchingbyRegex`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      if (response.ok) {
        const json = await response.json();
        setResults(json)
        console.log(results)
      }
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };




       // ============================
  // 📋 SEARCHING BY REGEX
  // ============================
  const regexSearchUser = async (query) => {
    try {
      const response = await fetch(`${host}/api/dashboard/searchingbyRegex`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      if (response.ok) {
        const json = await response.json();
        setResults2(json)
       
      }
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
    
  };






       // ============================
  // 📋 SEARCHING ALL ADDS
  // ============================
  const  SearchingAllAdds= async (id) => {
    try {
      const response = await fetch(`${host}/api/dashboard/searchingAddsAndUserdata`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (response.ok) {
        const json = await response.json();
        setAllAdds(json)
        console.log(allAdds)
       
      }
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
    
  };








  return (
    <DashboardContext.Provider value={{ adds, getById ,getByTag,getByUser,delAdd,regexSearch,results,results2,regexSearchUser,allAdds , SearchingAllAdds}}>
      {props.children}
    </DashboardContext.Provider>
  );
};
