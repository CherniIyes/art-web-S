import React from 'react'
import ReactStars from "react-stars";

function Stars() {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
      return (
        <div>
          <ReactStars 
            count={5}
            onChange={ratingChanged}
            size={23}
            value={4}
            activeColor="#ffd700" 
          />
        </div>
      )
      
}

export default Stars