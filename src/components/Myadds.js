import React, { useContext, useEffect } from "react";
import {NoteContext} from "../context/notes/NoteState";
import Carditem from "./Carditem";
import { useNavigate } from "react-router-dom";
const Myadds = () => {
  const Context = useContext(NoteContext);
  const { getMyCards, myCards ,setAlert } = Context;
  
  useEffect(() => {
    getMyCards();
  }, []);
  return (
    <div className="container">
      <h1>
        YOU HAVE POSTED{" "}
        <span className="badge text-bg-danger">{myCards.length}</span>{" "}
        {myCards.length === 1 ? "ADD" : "ADDS"}
      </h1>
      <div className="row g-5">
        {myCards.map((card) => {
          return <Carditem card={card} key={card._id} modalId={card._id} />;
        })}
      </div>
    </div>
  );
};

export default Myadds;
