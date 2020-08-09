import React, { useState } from 'react';

const RatingWidget=(props)=> {
 const[rating, setRating]= useState(0);

  const updateRating=(rating) =>{
   setRating({ rating });
  }
    const { rating } = rating;
    return (
      <ul>
        <li onClick={updateRating.bind(this, 1)} className={(rating >= 1) ? 'selected' : ''}>&#9733;</li>
        <li onClick={updateRating.bind(this, 2)} className={(rating >= 2) ? 'selected' : ''}>&#9733;</li>
        <li onClick={updateRating.bind(this, 3)} className={(rating >= 3) ? 'selected' : ''}>&#9733;</li>
        <li onClick={updateRating.bind(this, 4)} className={(rating >= 4) ? 'selected' : ''}>&#9733;</li>
        <li onClick={updateRating.bind(this, 5)} className={(rating >= 5) ? 'selected' : ''}>&#9733;</li>
      </ul>
    )
  }


export default RatingWidget;