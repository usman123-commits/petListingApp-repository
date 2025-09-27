import React, { useContext, useEffect, useRef, useState } from "react";
import styled, { keyframes } from 'styled-components';
import Addsrow from "./Addsrow";
import { DashboardContext } from "../context/notes/DashboardState";

const Parent = styled.div`
  display: grid;
  grid-template-rows: 300px 1fr;
  row-gap: 10xp;
  height: 100%;
`;



const Select = styled.div`
  grid-row: 1/2;
  display: grid;
  grid-template-rows: 0px repeat(3, 1fr) 10px;

 
`;



const CenterDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: 100px;
`;


const AddsDisplay = styled.div`
  grid-row: 2/3;
  display: grid;
  grid-template-rows: 40px repeat(auto-fill, 30px);
  gap: 0px;
`;



const Addstitle = styled.div`
  height: 40px;
  grid-row: 1/2;
  display: grid;
  grid-template-columns: 50px repeat(5,150px) 300px;
  text-align: center;
`;


const AddsData = styled.div`
  height: 30px;
  display: grid;
  grid-template-columns: 50px repeat(5,150px) 300px;
  text-align: center;
`;


const StyledH3 = styled.h3`
  border: 1px solid #E0E0E0;
  height: 40px;
  color: #673AB7;
`;



const StyledH5 = styled.h6`
  border: 1px solid black;
  height: 30px;
`;
const ButtonGroup = styled.div`
  display: flex;
`;

const HiddenInput = styled.input`
  display: none;
`;

const ToggleLabel = styled.label`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 400;
  border: 1px solid #0d6efd;
  background-color: ${({ isActive }) => (isActive ? '#0d6efd' : 'transparent')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#0d6efd')};
  border-radius: 5px;
  margin-right: -1px; /* To remove double borders */
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ isActive }) =>
    isActive ? '#0b5ed7' : '#e7f1ff'};
  }

  &:first-of-type {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &:last-of-type {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;



const Adds = () => {


  const context = useContext(DashboardContext);
  const { getById, adds, getByTag, getByUser } = context;

  const [select, setSelect] = useState('Search by id')
  const handleOnClick = (e) => {
    e.preventDefault()
    if (select === 'Search by id') {
      getById(ref.current.value)

    } else if (select === 'Search by tag') {
      getByTag(ref.current.value)
    }
    else if (select === 'Search by username') {

      getByUser(ref.current.value)
    }
  }
  let ref = useRef()
  const [btnSelected, setBtnSelected] = useState("btnradio1");

  const handleChange = (e) => {
    setBtnSelected(e.target.id);
  };
  return (
    <Parent>
      <Select>
        <CenterDiv style={{ gridRow: "2/3" }}>
          <img
            src="https://static.thenounproject.com/png/1408578-200.png"
            alt="adds"
            style={{
              height: "100px",
              width: "100px",
            }}
          />
          <h1 style={{ marginLeft: "10px" }}>
            <u>MANAGE ADDS</u>
          </h1>
        </CenterDiv>
        <CenterDiv style={{ gridRow: "3/4" }}>
          {/* Drop down for search */}

          <ButtonGroup role="group" aria-label="Basic radio toggle button group">
            <HiddenInput
              type="radio"
              id="btnradio1"
              name="btnradio"
              checked={btnSelected === "btnradio1"}
              onChange={handleChange}
              onClick={()=>{setSelect('Search by id')}}
            />
            <ToggleLabel htmlFor="btnradio1" isActive={btnSelected === "btnradio1"}>
              Id
            </ToggleLabel>

            <HiddenInput
              type="radio"
              id="btnradio2"
              name="btnradio"
              checked={btnSelected === "btnradio2"}
              onChange={handleChange}
              onClick={()=>{setSelect('Search by username')}}
            />
            <ToggleLabel htmlFor="btnradio2" isActive={btnSelected === "btnradio2"}>
             User
            </ToggleLabel>

            <HiddenInput
              type="radio"
              id="btnradio3"
              name="btnradio"
              checked={btnSelected === "btnradio3"}
              onChange={handleChange}
              onClick={()=>{setSelect('Search by tag')}}
            />
            <ToggleLabel htmlFor="btnradio3" isActive={btnSelected === "btnradio3"}>
             Tag
            </ToggleLabel>
          </ButtonGroup>


          {/* Search for adds */}
          <form className="d-flex" role="search" style={{ width: "600px", marginLeft: '20px' }}>
            <input
              className="form-control me-2"
              type="search"
              placeholder={`${select}`}
              aria-label="Search"
              ref={ref}
            />
            <button className="btn btn-outline-success" type="submit" style={{ width: '150px' }}
              onClick={handleOnClick}
            >
              Search
            </button>
          </form>
        </CenterDiv>
        <CenterDiv style={{ gridRow: '4/5' }}>
          <button type="button" className="btn btn-primary btn-lg" style={{ marginRight: '500px', width: '150px' }}>
            Block All
          </button>
          <button type="button" className="btn btn-primary btn-lg" style={{ width: '150px' }}>
            Delete All
          </button>
        </CenterDiv>
      </Select>
      <AddsDisplay>
        <Addstitle>
          <StyledH3 style={{ gridColumn: '2/3' }}>Select</StyledH3>
          <StyledH3 style={{ gridColumn: '3/4' }}>Add title</StyledH3>
          <StyledH3 style={{ gridColumn: '4/5' }}>User</StyledH3>
          <StyledH3 style={{ gridColumn: '5/6' }}>Date</StyledH3>
          <StyledH3 style={{ gridColumn: '6/7' }}>Status</StyledH3>
          <StyledH3 style={{ gridColumn: '7/8' }}>Actions</StyledH3>
        </Addstitle>
        {adds.map((card) => {
          return <Addsrow card={card} key={card._id} modalId={card._id} />
        })}

      </AddsDisplay>

    </Parent>
  );
};

export default Adds;
