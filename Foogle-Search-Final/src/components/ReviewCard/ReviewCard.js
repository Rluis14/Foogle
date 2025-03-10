import React from 'react';
import './ReviewCard.css';

const ReviewCard = ({ title, description, rating, imgSrc, username, onClick }) => {
  return (
    <div className="review_card" onClick={onClick}>
      <img src={imgSrc} alt={title} className="review_card_img" />
      <div className="review_card_content">
        <h3 className="review_card_title">{title}</h3>
        <p className="review_card_rating">Rating: {rating}</p>
        <p className="review_card_username">Reviewed by: {username}</p>
        <div className="review_card_description">{description}</div>
      </div>
    </div>
  );
};

export default ReviewCard;