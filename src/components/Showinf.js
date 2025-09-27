import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import {NoteContext} from "../context/notes/NoteState";
import styled from "styled-components";
import logo from "../images/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png";
const Parent = styled.div`
  display: grid;
  grid-template-columns: 600px 420px;
  grid-template-rows: 300px 160px 120px 250px;
  column-gap: 20px;
  row-gap: 20px;
`;

const Img = styled.img`
  width: auto;
  max-height:280px ;
  image-rendering: crisp-edges;

`;

const Carousel = styled.div`
  grid-row: 1/2;
  padding: 0px 180px 0px 200px;
  grid-column: 1/2;
  background-color:#D3D3D3;
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
`;
const Price = styled.div`
  grid-row: 2/3;
  grid-column: 1/2;
  height: 160px;
  width: 600px;
  border: 1px solid black;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 300px 1fr 95px;
  grid-template-rows: 60px 30px 1fr;
  row-gap: 5px;
`;
const Detail = styled.div`
  height: 120px;
  width: 600px;
  border: 1px solid black;
  border-radius: 10px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 40px 40px;
  column-gap: 20px;
  row-gap: 10px;
`;
const Description = styled.div`
  height: 300px;
  width: 600px;
  border: 1px solid black;
  border-radius: 10px;
  display: grid;
  grid-row: 4/5;
  grid-column: 1/2;
  grid-template-rows: 40px 1fr;
  row-gap: 10px;
`;
const User = styled.div`
  height: 290px;
  grid-column: 2/3;
  grid-row: 1/2;
  border: 1px solid black;
  border-radius: 10px;
  display: grid;
  grid-template-rows: 70px 70px 70px;
  column-gap: 20px;
  row-gap: 10px;
`;
const Breed = styled.div`
  grid-row: 2/3;
  background-color: whitesmoke;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 100px;
`;
const Comments  = styled.div`
  grid-row: 2/5;
  background-color: red;
  grid-column: 2/3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 100px;
`;

const Showinf = () => {
  let { id } = useParams();
  const context = useContext(NoteContext);
  const { getMyCardItem, myData } = context;

  useEffect(() => {
    // this takes id from params and updates the myData state 
    getMyCardItem(id);
    
  }, [id]);

  return (
    <>{myData!==undefined?<Parent className="container">
      <Carousel id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Img src={myData.imageUrl[1]} alt="pic1"></Img>
          </div>
          <div className="carousel-item">
            <Img src={myData.imageUrl[2]} alt="pic2"></Img>
          </div>
          <div className="carousel-item">
            <Img src={myData.imageUrl[3]} alt="pic3"></Img>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </Carousel>
      <Price>
        <h1 style={{ margin: "10px 0px 0px 10px", display: "inline" }}>
          RS {myData.price}
        </h1>
        <strong
          style={{
            gridColumn: "1/3",
            gridRow: "2/3",
            fontSize: "22px",
            marginLeft: "10px",
          }}
        >
          {myData.title}
        </strong>
        <i
          className="fa-solid fa-location-dot"
          style={{
            gridColumn: "1/2",
            gridRow: "3/4",
            marginLeft: "10px",
            display: "inline",
            marginTop: "3px",
          }}
        ></i>
        <p
          style={{
            gridColumn: "1/2",
            gridRow: "3/4",
            display: "inline",
            marginLeft: "30px",
          }}
        >
          {myData.location}
        </p>
        <p
          style={{
            gridColumn: "3/4",
            gridRow: "3/4",
            display: "inline",
            color: "blue",
          }}
        >
          3 days ago
        </p>
      </Price>
      <Detail style={{ gridColumn: "1/2", gridRow: "3/4" }}>
        <h2 style={{ display: "inline", marginLeft: "10px" }}>Details</h2>
        <Breed style={{ gridColumn: "1/2" }}>
          <h6
            style={{
              gridColumn: "1/2",
              marginLeft: "50px",
              marginTop: "10px",
            }}
          >
            {" "}
            <u>BREED</u>
          </h6>
          <h6
            style={{
              gridColumn: "2/3",
              marginLeft: "10px",
              marginTop: "10px",
            }}
          >
            {" "}
            <u>ASEEL</u>
          </h6>
        </Breed>
        <Breed style={{ gridColumn: "2/3" }}>
          <h6
            style={{
              gridColumn: "1/2",
              marginLeft: "50px",
              marginTop: "10px",
            }}
          >
            {" "}
            <u>SEX</u>
          </h6>
          <h6
            style={{
              gridColumn: "2/3",
              marginLeft: "10px",
              marginTop: "10px",
            }}
          >
            {" "}
            <u>MALE</u>
          </h6>
        </Breed>
      </Detail>
      <Description>
        <h2 style={{ display: "inline", marginLeft: "10px" }}>
          <u>Description</u>
        </h2>
        <p style={{ padding: "0px 20px 0px 20px", gridRow: "2/3" }}>
          {myData.description}
        </p>
      </Description>
      <User>
        <h3 style={{margin:'20px 0px 0px 20px'}}>Listed by private user</h3>
        <div style={{gridRow:'2/3',height:'auto',display:'grid',gridTemplateColumns:'68px 300px 1fr'}}>
        <img src={logo} alt="img5" style={{height:'68px',width:'68px'}}/>
        <u style={{marginLeft:'5px'}}>{myData.name}</u>
        </div>
        <h5 style={{margin:'20px 0px 0px 20px',gridRow:'3/4'}}>CONTACT NUMBER  :  <u style={{color:'blue'}}>03180053836</u></h5>
      </User>
      {/* this the comment section having 2 coloumn and 2,3,4,5 row */}
      <Comments>

        
      </Comments>
    </Parent>:<div></div>}
      
    </>
  );
};

export default Showinf;
