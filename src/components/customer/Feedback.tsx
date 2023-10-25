import React, { useState } from 'react';
import './Feedback.css'

export function Feedback() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleStarHover = (starNumber: number) => {
    setHoverRating(starNumber);
  };

  const handleStarClick = (starNumber: number) => {
    setRating(starNumber);
  };

  return (
    <div className="feedback-page">
      <h1 className="f-title ">Customer Feedback</h1>

      <div className="rating-section">
        <p className="rating-title">Please rate our service:</p>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((starNumber) => (
            <span
              key={starNumber}
              className={`star ${starNumber <= (hoverRating || rating) ? 'active' : ''}`}
              onMouseEnter={() => handleStarHover(starNumber)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => handleStarClick(starNumber)}
            >
              &#9733;
            </span>
          ))}
        </div>
      </div>

      <div className="feedback-section">
        <p className="feedback-title">Please leave your feedback:</p>
        <textarea className="feedback-input"></textarea>
        <button className="submit-button">Submit</button>
      </div>
    </div>
  );
}