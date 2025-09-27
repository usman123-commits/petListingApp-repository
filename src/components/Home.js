import React from "react";
import Card from "./Card";
import Add from "./Add";
const Home = (props) => {
  const { image} = props
  return (
    <div>
        <Add image={image}/>
      {<Card/>}
      
    </div>
  )
};

export default Home;
