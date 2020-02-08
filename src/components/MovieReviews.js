import React from 'react';

function MovieReviews (props) {

    let displayedReviews = props.reviews.map(review => 
      <div className="review">
        <h2>{review.display_title}</h2>
        <p>Headline: {review.headline}</p>
        <p>Opening Date: {review.opening_date}</p>
        <p>Short Summary: {review.summary_short}</p>
        <hr></hr>
      </div>)

      
    
    return (
        <div className="review-list">
          {displayedReviews}
        </div>
    )
}

export default MovieReviews
