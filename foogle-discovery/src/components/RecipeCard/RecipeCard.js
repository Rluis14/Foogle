import React from 'react';
import './RecipeCard.css';
const RecipeCard = ({ title, rating, username, description, imgSrc, onClick,onClickEdit }) => {
  return (
    <div className="recipe_card" onClick={onClick}>
      {onClickEdit && <div className='edit_icon_container' onClick={onClickEdit}><img src='/icon/edit.png' alt='edit' className='edit_icon_img'/></div>}
      <img src={imgSrc} alt={title} className="recipe_card_img" />
      <div className="recipe_card_content">
        <h3 className="recipe_card_title">{title}</h3>
        <p className="recipe_card_rating">Rated: {rating}</p>
        <p className="recipe_card_username">Created by: {username}</p>
        <div className="recipe_card_description">{description}</div>
      </div>
    </div>
  );
};

export default RecipeCard;