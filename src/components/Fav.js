import React, { useContext, useEffect, useState } from 'react'
import { NoteContext } from "../context/notes/NoteState";
import Carditem from './Carditem';


const Fav = () => {
  const Contex = useContext(NoteContext);
  const { setAlert, removingFav, extractingFavId, favCards, favCardArray } = Contex;





  const onRemove = async (modalId) => {
    // this takes the id to be removed from the array of favids and returns the array of updated fav ids array
    const response = await removingFav(modalId);
    //  this takes the updated array of favids and update the value of favCards state
    favCardArray(response);
    setAlert({ type: "success", message: "REMOVED FROM FAVOURITE" });

  }


  useEffect(() => {
    const findingCards = async () => {
      // this returns an array of fav ids
      const response = await extractingFavId();
      // this takes array of fav ids find all fav cards and update in favCards state
      favCardArray(response);
    }
    findingCards()
  }, [])



  return (
    <div className="container" >
      <h2 style={{ marginBottom: '50px' }} ><u>YOUR FAVOURITE ADDS</u></h2>
      <div className="row g-5">

        {favCards.length === 0 && (
          <div>
            <i
              className="fas fa-exclamation-triangle"
              style={{ fontSize: "50px", color: "orange" }}
            ></i> Not Found
          </div>
        )}
        {favCards.length !== 0 && favCards.map((card) => {
          return (<Carditem card={card} key={card._id} modalId={card._id} onButtonClick={onRemove} />)
        })}

      </div>
    </div>
  )
}

export default Fav
