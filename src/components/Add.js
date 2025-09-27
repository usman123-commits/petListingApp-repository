import React from 'react'

const Add = (props) => {
    const { image} = props;
  return (
    <div className='mb-5'>
      
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride-interval="carousel" data-bs-interval="2000">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image} className="d-block w-100" alt="Olximg1"/>
    </div>
    <div className="carousel-item">
      <img src={image} className="d-block w-100" alt="Olximg2"/>
    </div>
  </div>
</div>
    </div>
  )
}

export default Add
