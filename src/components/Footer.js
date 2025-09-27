import React from 'react';
import styled from 'styled-components';
import googlePaly from "../images/googleplay.svg"
import appgalery from "../images/appgalery.svg"
import instgram from "../images/insta.svg";
import faccebook from "../images/facebook.svg";
import youtube from "../images/youtube.svg";
import logo from "../images/logo.svg";




const Container = styled.div`
  display: grid; 
  grid-template-columns: 100px 140px 135px 150px 1fr 2fr;
  grid-template-rows: 50px 15px 15px 15px 15px 20px 70px;
  column-gap: 50px;
  row-gap: 0px; 
  margin-top: 20px;
`;

const Img = styled.img`
  height: 24px;
  width: 24px;
  margin: 0;
  object-fit: cover;
`;

const Footer = () => {
  return (
    <div style={{borderTop:'1px solid black',marginTop:'100px',backgroundColor:'whitesmoke'}}>
    <Container>
      {/* First div */}
      <div style={{ gridColumn: '2/3' }}><h6><u>Popular Categories</u></h6></div>
      <div style={{ gridColumn: '3/4' }}><h6><u>Trending Searches</u></h6></div>
      <div style={{ gridColumn: '4/5' }}><h6><u>About Us</u></h6></div>
      <div style={{ gridColumn: '5/6' }}><h6><u>OLX</u></h6></div>
      <div style={{ gridColumn: '6/7' }}>
        <h6 style={{ margin: 0 , display:'block'}}><u>Follow us</u></h6>
          <Img src={faccebook} alt="Facebook" style={{marginRight:'5px'}}/>
          <Img src={instgram} alt="Instagram"  style={{marginRight:'5px'}}/>
          <Img src={logo} alt="Logo"  style={{marginRight:'5px'}}/>
          <Img src={youtube} alt="YouTube"  style={{marginRight:'5px'}}/>
      </div>

     {/* SECOND COLOUMN */}      
      <div style={{ gridRow: '2/3', gridColumn: '2/3'  ,display:'flex'}}><small style={{alignSelf:'center'}}>Cars</small></div>
      <div style={{ gridRow: '3/4', gridColumn: '2/3' ,display:'flex'}}><small style={{alignSelf:'center'}}>Flats for rent</small></div>
      <div style={{ gridRow: '4/5', gridColumn: '2/3' ,display:'flex'}}><small style={{alignSelf:'center'}}>Mobile Phones</small></div>
      <div style={{ gridRow: '5/6', gridColumn: '2/3' ,display:'flex'}}><small style={{alignSelf:'center'}}>Jobs</small></div>
      {/* THIRD COLOUMN */}
      <div style={{ gridRow: '2/3', gridColumn: '3/4' ,display:'flex'}}><small style={{alignSelf:'center'}}>Watches</small></div>
      <div style={{ gridRow: '3/4', gridColumn: '3/4' ,display:'flex'}}><small style={{alignSelf:'center'}}>Bikes</small></div>
      <div style={{ gridRow: '4/5', gridColumn: '3/4' ,display:'flex'}}><small style={{alignSelf:'center'}}>Books</small></div>
      <div style={{ gridRow: '5/6', gridColumn: '3/4' ,display:'flex'}}><small style={{alignSelf:'center'}}>Dogs</small></div>
       {/* FOURTH COLOUMN */}
      <div style={{ gridRow: '2/3', gridColumn: '4/5' ,display:'flex'}}><small style={{alignSelf:'center'}}> About Dubizzle Group</small></div>
      <div style={{ gridRow: '3/4', gridColumn: '4/5' ,display:'flex'}}><small style={{alignSelf:'center'}}> OLX Blog</small></div>
      <div style={{ gridRow: '4/5', gridColumn: '4/5' ,display:'flex'}}><small style={{alignSelf:'center'}}> Contact Us</small></div>
      <div style={{ gridRow: '5/6', gridColumn: '4/5' ,display:'flex'}}><small style={{alignSelf:'center'}}> OLX for Businesses</small></div>
      {/* FIFTH COLOUMN */}
      <div style={{ gridRow: '2/3', gridColumn: '5/6' ,display:'flex'}}><small style={{alignSelf:'center'}}> Help</small></div>
      <div style={{ gridRow: '3/4', gridColumn: '5/6' ,display:'flex'}}><small style={{alignSelf:'center'}}> Sitemap</small></div>
      <div style={{ gridRow: '4/5', gridColumn: '5/6' ,display:'flex'}}><small style={{alignSelf:'center'}}> Terms of use</small></div>
      <div style={{ gridRow: '5/6', gridColumn: '5/6' ,display:'flex'}}><small style={{alignSelf:'center'}}>Privacy Policy</small></div>
      <div style={{gridRow:'7/8',gridColumn:'1/8',backgroundColor:'black',marginTop:'10px',color:'whitesmoke',display:'flex' ,justifyContent:'center'}}>
      <p style={{alignSelf:'center'}}>Free Classifieds in Pakistan  . © 2006-2024 OLX</p>
      </div>
      <img src={googlePaly} alt="googlePaly" style={{gridRow:'2/4',gridColumn:'6/7',width:'84px',height:'28px'}}/>
      <img src={appgalery} alt="appgalery" style={{gridRow:'4/6',gridColumn:'6/8',width:'84px',height:'28px'}}/>
      
    </Container>
    </div>
  );
};

export default Footer;
