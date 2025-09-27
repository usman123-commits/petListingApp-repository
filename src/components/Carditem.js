import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NoteContext } from "../context/notes/NoteState";

const Carditem = (props) => {
  const context = useContext(NoteContext); // Extract context values for managing favorites and alerts
  const { setAlert, favCard, extractingFavId } = context;
  const [heart, setHeart] = useState("fa-regular fa-heart");
  const { card, modalId, onButtonClick } = props; // Props destructuring for card data, modalId, and button click handler
  let location = useLocation(); // To check the current route location
  const localRef = useRef(null); // Reference to programmatically trigger the Link click

  // Handles click event to add or remove item from favorites
  const onClick = async () => {
    if (heart === "fa-regular fa-heart") {
      favCard(modalId).then(() => {
        setHeart("fa-solid fa-heart");
        setAlert({ type: "success", message: "ADDED TO FAVOURITE SUCCESSFULLY" });
      })
        .catch(() => {
          setHeart("fa-regular fa-heart");
          setAlert({ type: "danger", message: "SOMETHING WENT WRONG" });
        })

    }
  };


  // Runs when the card data changes (for example, when it's first loaded)
useEffect(() => {
  const checkFavStatus = async () => {
    const favCards = await extractingFavId(); // Wait for the array to come back

    if (favCards && favCards.includes(card._id)) {
      setHeart("fa-solid fa-heart");
    } else {
      setHeart("fa-regular fa-heart");
    }
    
  };

  checkFavStatus(); // Call the async function
}, [card]);


  return (
    <div className="col-md-3 mx-4">
      <div className="card" style={{ width: "18rem" }}>
        {/* Image section for the card */}
        <img
          src={card.imageUrl[0]} // Use the first image from the image URL array
          className="card-img-top"
          alt="Card Preview"
          onClick={() => localRef.current.click()} // Click to trigger the modal link
        />

        <div className="card-body">
          <Link
            className="visually-hidden"
            to={`/showinf/${modalId}`} // Link to view the full card information
            ref={localRef}
          ></Link>

          <h5 style={{ display: "grid", gridTemplateColumns: "1fr 25px" }}>
            {card.title} {/* Display card title */}

            {location.pathname === "/fav" ? ( // If on the favorites page
              <i
                className="fas fa-minus-circle"
                title="Remove from Favorites"
                onClick={() => onButtonClick(modalId)} // Call the parent's onButtonClick to remove from favorites
              ></i>
            ) : (
              // favourite button
              <i
                className={heart} // Heart icon to toggle add/remove from favorites
                style={{ gridColumn: "2/3" }}
                onClick={onClick} // Call onClick to handle add/remove logic
              ></i>
            )}
          </h5>

          <p className="card-text">{card.description.slice(0, 30)}...</p> {/* Short preview of description */}
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: {card.price}</li> {/* Display card price */}
          <li className="list-group-item">Location: {card.location}</li> {/* Display card location */}
        </ul>
      </div>
    </div>
  );
};

export default Carditem;
