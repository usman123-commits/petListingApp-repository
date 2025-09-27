import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { DashboardContext } from "../context/notes/DashboardState";

const AddsData = styled.div`
  height: 30px;
  display: grid;
  grid-template-columns: 50px repeat(5, 150px) 300px;
  text-align: center;
`;

const StyledH6 = styled.h6`
  border: 1px solid #E0E0E0;
  height: 30px;
  color: #2196F3;
`;

const StyledP = styled.p`
 font-size: 18px;
 display: inline;
 
 transition: all 0.3s ease;
 &:hover{
  text-decoration: underline;
 }

`;


const Addsrow = ({ card, modalId }) => {
  const localRef = useRef();
  const context = useContext(DashboardContext)
  const { delAdd } = context;


  return (
    <AddsData >
      <StyledH6 style={{ gridColumn: "2/3", display: 'grid', justifyContent: 'center', alignItems: 'center' }}>
        <div className="form-check" >
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ border: '1px solid black' }} />

        </div>

      </StyledH6>
      <StyledH6 style={{ gridColumn: "3/4" }}>{card.title}</StyledH6>
      <StyledH6 style={{ gridColumn: "4/5" }}>{card.name}</StyledH6>
      <StyledH6 style={{ gridColumn: "5/6" }}>
        {card.date.split("T")[0]}
      </StyledH6>
      <StyledH6 style={{ gridColumn: "6/7", color: 'green' }}>Active</StyledH6>
      <StyledH6 style={{ gridColumn: "7/8" }}>
        <img
          onClick={() => { delAdd(modalId) }}
          src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png"
          alt="delete"
          style={{
            height: "20px",
            width: "20px",
            marginBottom: "5px",
          }}
        />
        {/* style={{color:'red'}} */}
        <StyledP style={{ color: 'red' }} onClick={() => { delAdd(modalId) }}
        >
          Delete
        </StyledP>
        <img
          src="https://png.pngtree.com/png-vector/20190916/ourmid/pngtree-block-icon-for-your-project-png-image_1731069.jpg"
          alt="delete"
          style={{
            height: "20px",
            width: "20px",
            marginLeft: "20px",
            marginBottom: "5px",
          }}
        />

        <StyledP style={{ marginRight: "20px", color: 'rgb(205, 51, 51)' }}>
          Block
        </StyledP>
        <img
          src="https://cdn-icons-png.flaticon.com/512/301/301687.png"
          alt="delete"
          style={{
            height: "20px",
            width: "20px",
            marginBottom: "5px",
          }}
          onClick={() => localRef.current.click()}
        />

        <Link
          style={{ display: "inline", marginLeft: "2px", color: 'rgb(23, 174, 188)', textDecoration: 'none' }}
          to={`/showinf/${modalId}`} // Link to view the full card information
          ref={localRef}
          onMouseOver={(e) => { e.target.style.textDecoration = "underline" }}
          onMouseOut={(e) => { e.target.style.textDecoration = "none" }}
        >View</Link>
      </StyledH6>
    </AddsData>
  );
};

export default Addsrow;
