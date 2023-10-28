import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { OnlineFood } from '../../Utils/OnlineFood';
import './FoodDeliveryCard.css';

const FoodDeliveryCard = () => {
  const [showRated, setShowRated] = useState(false);

  // filter rating
  const filterRating = () => {
    return OnlineFood.filter((food) => parseFloat(food.rating) >= 4);
  };

  const [foods, setFoods] = useState(OnlineFood);

  useEffect(() => {
    if (showRated) {
      setFoods(filterRating());
    } else {
      setFoods(OnlineFood);
    }
  }, [showRated]);

  return (
    <div>
      <button className='ratingButton' onClick={() => setShowRated(!showRated)}>
        {showRated ? 'Ratings 4.0+ x' : 'Ratings 4.0+'}
      </button>
      <div className='FoodDeliveryContainer'>
      {foods.map((restaurant) => (
        <div key={restaurant.id} className='restaurantCardContainer'>
          <div className='restaurantDiscount'>{restaurant.discount}</div>
          <img className='restaurantImages' src={restaurant.image} alt={restaurant.name} />
          <h2 className='restaurantName'>{restaurant.name}</h2>
          <div className='ratingTimeDiv'>
            <FontAwesomeIcon className='ratingIcon' icon={faStar} />
            <div>{restaurant.rating} </div>
            <div>.</div>
            <div>{restaurant.time}</div>
          </div>
          <div className='restaurantDescription'>{restaurant.description}</div>
          <div className='restaurantLocation'>{restaurant.location}</div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default FoodDeliveryCard;
