import React from 'react'
import './RestaurantCard.css'
import RestaurantSlider from '../../components/RestaurantSlider/RestaurantSlider'

const RestaurantCard = () => {
  return (
    <div className='restaurantContainer'>
        <div className='restaurantChains'>Top restaurant chains in Bhubaneswar</div>
        <RestaurantSlider/>
    </div>
  )
}

export default RestaurantCard