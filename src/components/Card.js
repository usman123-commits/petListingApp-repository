import React, { useContext, useEffect } from "react";
import {NoteContext} from "../context/notes/NoteState";
import Carditem from "./Carditem";
const Card = () => {
  const Context = useContext(NoteContext);
  const { cards, getCards } = Context;

// logic for filtering add with url (not found in cloudinary)
  
  const adds=cards.filter((card)=>{return card.imageUrl[0]!=='https://res.cloudinary.com/dq7xb4576/image/upload/v1732644924/chwgreohvw85u1e61x7t.webp'})


  useEffect(() => {
    getCards();
  }, []);

  return (
    <div className="container">
      <div className="row g-5">
        {cards.length === 0 && (
          <div>
            <i
              className="fas fa-exclamation-triangle"
              style={{ fontSize: "50px", color: "orange" }}
            ></i> Not Found
          </div>
        )}
        {adds.map((card) => {
          return <Carditem card={card} key={card._id} modalId={card._id} />;
        })}
      </div>
    </div>
  );
};

export default Card;
