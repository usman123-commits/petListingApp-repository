import { createContext, useState } from "react";
// using createContext to create context and export it to use in other files
export const NoteContext = createContext();

export const NoteState = (props) => {
  const host = "http://localhost:5000";
  const initialCards = [];
  const [cards, setCards] = useState(initialCards);
  const [Alert, setAlert] = useState("");
  const [email, setEmail] = useState("");
  const [myCards, setMyCards] = useState([]);
  const [myData, setMyData] = useState();
  const [favCards, setfavCards] = useState([]);
  const [loginStatus, setloginStatus] = useState([]);


  // ============================
  // 📝 Add a New Card (POST request)
  // ============================
  const addCard = async (title, description, tag, location, price, imageUrl) => {
    try {
      const response = await fetch(`${host}/api/card/addcard`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ title, description, tag, location, price, imageUrl }),
      });
      const json = await response.json();
      if (response.ok) {
        setAlert({ type: "success", message: "YOUR AD IS POSTED SUCCESSFULLY" });
        console.log(json);
      }
    } catch (error) {
      console.error("Error adding card:", error);
    }
  };

  // ============================
  // 📋 Get All Cards (GET request)
  // ============================
  const getCards = async () => {
    try {
      const response = await fetch(`${host}/api/card/fetchallcards`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (response.ok) {
        const json = await response.json();
        setCards(json);
      }
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  // ============================
  // 📋 Get User-Specific Cards (GET request)
  // ============================
  const getMyCards = async () => {
    try {
      const response = await fetch(`${host}/api/card/fetchMycards`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: 'include'
      });
      if (response.ok) {
        const json = await response.json();
        setMyCards(json);
      }
    } catch (error) {
      console.error("Error fetching my cards:", error);
    }
  };

  // ============================
  // 📋 Get Specific Card Info (POST request)
  // ============================
  const getMyCardItem = async (id) => {
    try {
      const response = await fetch(`${host}/api/card/fetchMycarditem`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id }),
      });
      if (response.ok) {
        const json = await response.json(); // Extract first item from the array
        setMyData({ ...json }[0])
      }
    } catch (error) {
      console.error("Error fetching card item:", error);
    }
  };

  // ============================
  // 🔍 Search for Cards (POST request)
  // ============================
  const search = async (data) => {
    const tag = data.toUpperCase();
    try {
      const response = await fetch(`${host}/api/card/searching`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tag }),
      });
      if (response.ok) {
        const json = await response.json();
        setCards(json);
      }
    } catch (error) {
      console.error("Error searching cards:", error);
    }
  };





  // ============================
  // ❌ Remove from Favorites (POST request)
  // ============================
  const removingFav = async (id) => {
    try {
      const response = await fetch(`${host}/api/card/removeFav`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ id }),
      });
      if (response.ok) {
        const json = await response.json();
        setAlert({ type: "success", message: "REMOVED FROM FAVOURITE" });
// json.favourite the array of fav ids 
        return json.favourites;
      }
    } catch (error) {
      console.error("Error removing from favorites:", error);
    }
  };


  // checking status of the user
  const checkingStatus = async () => {
    try {
      const response = await fetch(`${host}/api/auth/checkStatus`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include"
      });
      if (response.ok) {
        const json = await response.json();
        setloginStatus(json.isLogin);

      } else {
        setloginStatus(false);
      }
    } catch (error) {
      setloginStatus(false);
      console.error(error);
    }
  };




  // extracting favourite id
  const extractingFavId = async () => {
    try {
      const response = await fetch(`${host}/api/card/checking-favId`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include"
      })
      if (response.ok) {
        const json = await response.json();
        
        return json.favourite;


      }
    } catch (error) {
      console.log(error)
    }
  }




  // adding fav cards to googleuser array
  const favCard = async (id) => {
    try {
      const response = await fetch(`${host}/api/card/fav-cards`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ id })
      });
      if (response.ok) {
        const json = await response.json();
      }
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }


    } catch (error) {
      console.error(error);
    }
  };

   // finding fav cards by help of an array
  const favCardArray = async (array) => {
   
    try {
      const response = await fetch(`${host}/api/card/finding-favCards`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ array:array })
      });
      if (response.ok) {
        const json = await response.json();
        setfavCards(json.favCards)
      }
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }


    } catch (error) {
      console.error(error);
    }
  };
  // this handles logout
  const logoutFun = async () => {
    try {
      const response = await fetch(`${host}/api/auth/logout`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include"
      });
      if (response.ok) {
        const json = await response.json();
        setloginStatus(false);

      }
    } catch (error) {

      console.error(error);
    }
  };

  // ============================
  // 📦 Return NoteContext Provider
  // ============================


  return (
    <NoteContext.Provider
      value={{
        setCards,
        cards,
        getCards,
        Alert,
        setAlert,
        email,
        setEmail,
        addCard,
        getMyCards,
        myCards,
        getMyCardItem,
        myData,
        search,
        favCards,
        removingFav,
        checkingStatus,
        loginStatus,
        logoutFun,
        favCard,
        extractingFavId,
        favCardArray

      }}>{props.children}
    </NoteContext.Provider>)
}
